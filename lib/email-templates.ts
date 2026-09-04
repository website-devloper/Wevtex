/**
 * Branded HTML email templates.
 *
 * Written to email-client rules, not web rules: table layout, every style
 * inline, no web fonts, no flex/grid, explicit bgcolor alongside CSS so Outlook
 * paints the bands. Gmail strips <head><style>, so nothing may depend on it.
 * Width is capped at 600px, the safe maximum across clients.
 *
 * Brand: lime C6F24E on ink 14170F, matching the site. The logo is the ink
 * mark, so it sits on a lime band — it would vanish on a dark one.
 */

const INK = "#14170F";
const INK_2 = "#4A4F42";
const INK_3 = "#7C8272";
const LIME = "#C6F24E";
const LIME_TINT = "#F5FBE2";
const LINE = "#E3E5D9";
const GROUND = "#F4F5EC";
const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const LOGO = "https://wevtex.com/images/logo/wevtex-mark-ink.png";

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );

/** Lime band with the ink mark. */
function header(eyebrow: string) {
  return `
  <tr>
    <td bgcolor="${LIME}" style="background:${LIME};padding:22px 32px;border-radius:10px 10px 0 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="left" style="vertical-align:middle;">
            <img src="${LOGO}" width="26" height="17" alt="Wevtex"
                 style="display:inline-block;vertical-align:middle;border:0;margin-right:9px;">
            <span style="font-family:${FONT};font-size:17px;font-weight:700;letter-spacing:.16em;color:${INK};vertical-align:middle;">WEVTEX</span>
          </td>
          <td align="right" style="vertical-align:middle;font-family:${FONT};font-size:10px;font-weight:700;letter-spacing:.14em;color:${INK};">
            ${esc(eyebrow)}
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function footer(note: string) {
  return `
  <tr>
    <td style="padding:20px 32px 26px;border-top:1px solid ${LINE};font-family:${FONT};font-size:12px;line-height:1.6;color:${INK_3};">
      ${note}
    </td>
  </tr>`;
}

function shell(inner: string) {
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:${GROUND};">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="${GROUND}" style="background:${GROUND};padding:26px 12px;">
  <tr><td align="center">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"
           style="width:100%;max-width:600px;background:#FFFFFF;border-radius:10px;border:1px solid ${LINE};">
      ${inner}
    </table>
  </td></tr>
</table>
</body></html>`;
}

/** One label/value row. Renders nothing when the value is empty. */
function row(label: string, value: string, link?: "mailto" | "tel") {
  const v = value.trim();
  if (!v) return "";
  let rendered = esc(v);
  if (link === "mailto") {
    rendered = `<a href="mailto:${esc(v)}" style="color:${INK};text-decoration:underline;">${esc(v)}</a>`;
  } else if (link === "tel") {
    rendered = `<a href="tel:${esc(v.replace(/\s+/g, ""))}" style="color:${INK};text-decoration:underline;">${esc(v)}</a>`;
  }
  return `
  <tr>
    <td style="padding:9px 0;border-bottom:1px solid ${LINE};font-family:${FONT};font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:${INK_3};width:34%;vertical-align:top;">${esc(label)}</td>
    <td style="padding:9px 0;border-bottom:1px solid ${LINE};font-family:${FONT};font-size:15px;color:${INK};vertical-align:top;">${rendered}</td>
  </tr>`;
}

/** Bulletproof CTA — a table, because padding on <a> is unreliable in Outlook. */
function button(href: string, label: string) {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:22px 0 4px;">
    <tr>
      <td bgcolor="${INK}" style="background:${INK};border-radius:7px;">
        <a href="${href}" style="display:inline-block;padding:13px 26px;font-family:${FONT};font-size:14px;font-weight:600;color:${LIME};text-decoration:none;">${esc(label)}</a>
      </td>
    </tr>
  </table>`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function leadNotificationEmail(d: {
  name: string;
  contact: string;
  business: string;
  service: string;
  phone: string;
  budget: string;
  timeline: string;
  source: string;
  message: string;
}) {
  const isEmail = EMAIL_RE.test(d.contact);
  const firstName = d.name.split(" ")[0] || d.name;

  const rows = [
    row("Nom", d.name),
    row("Contact", d.contact, isEmail ? "mailto" : undefined),
    row("Entreprise", d.business),
    row("Besoin", d.service),
    row("Téléphone", d.phone, "tel"),
    row("Budget", d.budget),
    row("Délai", d.timeline),
    row("Source", d.source),
  ].join("");

  return shell(`
  ${header("NOUVEAU PROSPECT")}
  <tr>
    <td style="padding:30px 32px 4px;font-family:${FONT};">
      <div style="font-size:22px;font-weight:700;color:${INK};line-height:1.3;">${esc(d.name)}</div>
      <div style="font-size:14px;color:${INK_2};margin-top:5px;">vous a écrit depuis wevtex.com</div>
    </td>
  </tr>
  <tr>
    <td style="padding:18px 32px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${rows}</table>
    </td>
  </tr>
  <tr>
    <td style="padding:22px 32px 0;">
      <div style="font-family:${FONT};font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:${INK_3};margin-bottom:9px;">Message</div>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="${LIME_TINT}" style="background:${LIME_TINT};border-radius:7px;">
        <tr><td style="padding:15px 17px;font-family:${FONT};font-size:15px;line-height:1.65;color:${INK};">
          ${esc(d.message).replace(/\n/g, "<br>")}
        </td></tr>
      </table>
      ${isEmail ? button(`mailto:${esc(d.contact)}`, `Répondre à ${esc(firstName)}`) : ""}
    </td>
  </tr>
  ${footer(
    isEmail
      ? `Répondre à cet e-mail écrit directement à ${esc(d.contact)}.`
      : `Aucune adresse e-mail fournie. Recontactez ce prospect par téléphone ou WhatsApp&nbsp;: un «&nbsp;Répondre&nbsp;» ici n'arriverait nulle part.`
  )}`);
}

export function newsletterEmail(address: string) {
  return shell(`
  ${header("NEWSLETTER")}
  <tr>
    <td style="padding:30px 32px 26px;font-family:${FONT};">
      <div style="font-size:20px;font-weight:700;color:${INK};line-height:1.35;">Nouvelle inscription</div>
      <div style="font-size:15px;line-height:1.7;color:${INK_2};margin-top:9px;">
        <a href="mailto:${esc(address)}" style="color:${INK};text-decoration:underline;">${esc(address)}</a>
        s'est inscrit à la newsletter.
      </div>
    </td>
  </tr>
  ${footer("Envoyé depuis le pied de page de wevtex.com.")}`);
}

export function autoReplyEmail(d: { firstName: string; whatsappUrl: string }) {
  return shell(`
  ${header("MESSAGE BIEN REÇU")}
  <tr>
    <td style="padding:30px 32px 0;font-family:${FONT};">
      <div style="font-size:22px;font-weight:700;color:${INK};line-height:1.3;">Merci ${esc(d.firstName)} —<br>votre message est bien arrivé.</div>
      <div style="font-size:15px;line-height:1.7;color:${INK_2};margin-top:16px;">
        Nous revenons vers vous dans les prochaines heures ouvrées avec un avis
        clair sur votre projet et un prix précis.
      </div>
      <div style="font-size:15px;line-height:1.7;color:${INK_2};margin-top:14px;">
        Et si votre idée est encore en train de se préciser, tant mieux&nbsp;: c'est
        souvent là que le meilleur travail commence. Nous vous aiderons à la cadrer.
      </div>
      <div style="font-size:15px;line-height:1.7;color:${INK_2};margin-top:14px;">
        Besoin d'une réponse plus rapide&nbsp;? Écrivez-nous sur WhatsApp.
      </div>
      ${button(d.whatsappUrl, "Discuter sur WhatsApp")}
    </td>
  </tr>
  <tr>
    <td style="padding:22px 32px 0;font-family:${FONT};font-size:15px;color:${INK_2};">
      — L'équipe Wevtex
    </td>
  </tr>
  ${footer(
    "Wevtex · Agence web &amp; applications · Casablanca, Maroc<br>Vous recevez cet e-mail parce que vous nous avez contactés via wevtex.com."
  )}`);
}
