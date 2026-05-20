/* Scopes the design stylesheet under a `.wevtex` wrapper so it cannot
   collide with the existing template's Bootstrap + main.css. */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "project", "styles.css");
const OUT = path.join(__dirname, "..", "app", "wevtex-home.css");

let css = fs.readFileSync(SRC, "utf8");
// Strip comments (none contain braces — safe).
css = css.replace(/\/\*[\s\S]*?\*\//g, "");

const ROOT = ".wevtex";

function scopeSelectorList(list) {
  const out = [];
  for (let raw of list.split(",")) {
    const s = raw.trim();
    if (!s) continue;
    if (s === "html" || s === "body" || s === ":root") {
      out.push(ROOT);
    } else if (s === "*") {
      out.push(ROOT, ROOT + " *");
    } else {
      out.push(ROOT + " " + s);
    }
  }
  // de-dupe while preserving order
  return [...new Set(out)].join(",\n");
}

/* Split a block of CSS into top-level rules (selector/at-rule + { ... }). */
function splitRules(src) {
  const rules = [];
  let depth = 0;
  let buf = "";
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    buf += ch;
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        rules.push(buf.trim());
        buf = "";
      }
    }
  }
  if (buf.trim()) rules.push(buf.trim());
  return rules;
}

function transform(src) {
  return splitRules(src)
    .map((rule) => {
      const braceIdx = rule.indexOf("{");
      if (braceIdx === -1) return rule;
      const prelude = rule.slice(0, braceIdx).trim();
      const body = rule.slice(braceIdx + 1, rule.lastIndexOf("}"));

      if (prelude.startsWith("@keyframes") || prelude.startsWith("@font-face")) {
        return rule; // passthrough untouched
      }
      if (prelude.startsWith("@media") || prelude.startsWith("@supports")) {
        return prelude + " {\n" + transform(body) + "\n}";
      }
      // normal style rule
      return scopeSelectorList(prelude) + " {" + body + "}";
    })
    .join("\n\n");
}

let result = transform(css);

// floatY is referenced by .satellite / .aurora-chip / .page-aurora .tag
// but never defined in the source — add it.
result +=
  "\n\n@keyframes floatY {\n" +
  "  0%, 100% { transform: translateY(0); }\n" +
  "  50% { transform: translateY(-12px); }\n" +
  "}\n";

// The host template's main.css explicitly colors h1–h6 dark (#111). That
// breaks the design, which expects headings to INHERIT their section's
// colour (white on .theme-dark, ink on .theme-cream). Force inheritance —
// specificity .wevtex h_ (0,2,0) beats main.css h_ (0,0,1); design rules
// that set heading colours contextually are (0,2,1)+ so they still win.
result +=
  "\n/* Re-establish heading colour inheritance over the host template */\n" +
  ".wevtex :where(h1, h2, h3, h4, h5, h6) { color: inherit; }\n" +
  ".wevtex :where(p, ul, ol, li, a, span, strong, em, small, label, figure) { color: inherit; }\n";

// Wrapper hardening — re-root the design's document context.
result =
  "/* Auto-generated from .design-wevtex/project/styles.css — scoped under .wevtex */\n" +
  ".wevtex {\n" +
  "  min-height: 100vh;\n" +
  "  isolation: isolate;\n" +
  "}\n\n" +
  result;

fs.writeFileSync(OUT, result, "utf8");
console.log("wrote " + OUT + " (" + result.length + " bytes)");
