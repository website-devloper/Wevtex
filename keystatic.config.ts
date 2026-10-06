import { config, fields, collection, singleton } from "@keystatic/core";
import { block, wrapper } from "@keystatic/core/content-components";

/**
 * Keystatic — the dashboard at /keystatic.
 *
 * Content lives in content/ as files in this repo: saving from the dashboard
 * commits them, and the pages read them at build time. See
 * wevtex-keystatic-plan.md for the full model and the order of migration.
 *
 * Every label and description is written in French, for the person who edits
 * the site. A field with no explanation is a field filled in wrong.
 */

/* ---------------------------------------------------------------- shared -- */

/** The SEO block, identical on every page-like entry. */
const seo = (locale: "fr" | "en") =>
  fields.object(
    {
      metaTitle: fields.text({
        label: locale === "fr" ? "Titre Google (60 caractères max)" : "Google title (60 characters max)",
        description:
          locale === "fr"
            ? "Ce que Google affiche en bleu dans les résultats. Mettez le mot-clé au début."
            : "What Google shows as the blue link. Put the keyword first.",
        validation: { isRequired: true, length: { max: 70 } },
      }),
      metaDescription: fields.text({
        label: locale === "fr" ? "Description Google (155 caractères max)" : "Google description (155 characters max)",
        description:
          locale === "fr"
            ? "Les deux lignes sous le titre. C'est une annonce : donnez une raison de cliquer."
            : "The two lines under the title. It is an ad: give a reason to click.",
        multiline: true,
        validation: { isRequired: true, length: { max: 175 } },
      }),
      keyword: fields.text({
        label: locale === "fr" ? "Mot-clé visé" : "Target keyword",
        description:
          locale === "fr"
            ? "Un seul, et jamais le même que sur une autre page : deux pages sur le même mot-clé se font concurrence."
            : "One only, and never the same as another page: two pages on one keyword compete with each other.",
        validation: { isRequired: true },
      }),
      ogImage: fields.image({
        label: locale === "fr" ? "Image de partage (optionnelle)" : "Share image (optional)",
        description:
          locale === "fr"
            ? "Affichée sur WhatsApp, LinkedIn et Facebook. 1200 × 630. Vide = l'image du site."
            : "Shown on WhatsApp, LinkedIn and Facebook. 1200 × 630. Empty = the site image.",
        directory: "public/images/uploads/og",
        publicPath: "/images/uploads/og",
      }),
      noindex: fields.checkbox({
        label: locale === "fr" ? "Cacher de Google" : "Hide from Google",
        description:
          locale === "fr"
            ? "À cocher seulement pour une page volontairement hors des résultats."
            : "Only for a page deliberately kept out of search results.",
        defaultValue: false,
      }),
    },
    { label: "SEO" },
  );

/** q/a pairs, rendered on the page and sent to Google as FAQ schema. */
const faqs = (locale: "fr" | "en") =>
  fields.array(
    fields.object({
      q: fields.text({ label: locale === "fr" ? "Question" : "Question", validation: { isRequired: true } }),
      a: fields.text({
        label: locale === "fr" ? "Réponse" : "Answer",
        multiline: true,
        validation: { isRequired: true },
      }),
    }),
    {
      label: locale === "fr" ? "Questions fréquentes" : "FAQ",
      description:
        locale === "fr"
          ? "Affichées en bas de l'article et envoyées à Google : elles peuvent apparaître directement dans les résultats."
          : "Shown at the end of the post and sent to Google, where they can appear in the results.",
      itemLabel: (props) => props.fields.q.value || "Question",
    },
  );

/** The two blocks a post can hold that Markdown and native tables cannot express. */
const postComponents = {
  note: wrapper({
    label: "Encadré",
    description: "Une remarque mise en valeur dans un bloc à part.",
    schema: {},
  }),
  links: block({
    label: "Liens internes",
    description: "Une rangée de liens vers d'autres pages du site. Bon pour le référencement.",
    schema: {
      items: fields.array(
        fields.object({
          label: fields.text({ label: "Texte du lien", validation: { isRequired: true } }),
          href: fields.text({
            label: "Adresse",
            description: "Chemin interne, par exemple /referencement-seo-maroc",
            validation: { isRequired: true },
          }),
        }),
        { label: "Liens", itemLabel: (props) => props.fields.label.value || "Lien" },
      ),
    },
  }),
};

type Opt = { label: string; value: string };

const CATEGORIES_FR: Opt[] = [
  { label: "Prix & budget", value: "Prix & budget" },
  { label: "Référencement", value: "Référencement" },
  { label: "Publicité", value: "Publicité" },
  { label: "Stratégie", value: "Stratégie" },
  { label: "Technologie", value: "Technologie" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Automatisation", value: "Automatisation" },
  { label: "Choisir un prestataire", value: "Choisir un prestataire" },
];

const CATEGORIES_EN: Opt[] = [
  { label: "Pricing & budget", value: "Pricing & budget" },
  { label: "SEO", value: "SEO" },
  { label: "Advertising", value: "Advertising" },
  { label: "Strategy", value: "Strategy" },
  { label: "Technology", value: "Technology" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Automation", value: "Automation" },
  { label: "Choosing a provider", value: "Choosing a provider" },
];

/** Which service page a post links to. The value is the service id in code. */
const SERVICES: Opt[] = [
  { label: "Création de sites web", value: "website-creation" },
  { label: "Référencement naturel (SEO)", value: "seo" },
  { label: "Google Maps & SEO local", value: "local-seo" },
  { label: "Publicité Google & Meta", value: "ads" },
  { label: "Applications mobiles", value: "mobile-apps" },
  { label: "Logiciels bureau", value: "desktop-apps" },
  { label: "Solutions sur mesure", value: "custom-solutions" },
  { label: "Chatbots WhatsApp", value: "whatsapp-bots" },
];

/* ------------------------------------------------------------ collections -- */

const post = (locale: "fr" | "en") =>
  collection({
    label: locale === "fr" ? "Blog (français)" : "Blog (anglais)",
    path: `content/${locale}/posts/*`,
    format: { contentField: "content" },
    slugField: "title",
    columns: ["title", "category", "publishedAt"],
    entryLayout: "content",
    schema: {
      title: fields.slug({
        name: {
          label: locale === "fr" ? "Titre de l'article" : "Post title",
          description:
            locale === "fr"
              ? "Le grand titre en haut de la page. Écrivez-le comme la question que votre client taperait."
              : "The big heading on the page. Write it as the question a client would type.",
          validation: { isRequired: true },
        },
        slug: {
          label: locale === "fr" ? "Adresse de la page" : "Page address",
          description:
            locale === "fr"
              ? "Proposée d'après le titre. Une fois l'article publié, ne la changez plus : les liens existants casseraient."
              : "Suggested from the title. Once published, leave it alone: existing links would break.",
        },
      }),
      excerpt: fields.text({
        label: locale === "fr" ? "Résumé (carte du blog)" : "Excerpt (blog card)",
        description:
          locale === "fr" ? "Deux lignes, affichées sur la liste des articles." : "Two lines, shown on the blog index.",
        multiline: true,
        validation: { isRequired: true },
      }),
      answer: fields.text({
        label: locale === "fr" ? "La réponse, en une phrase" : "The answer, in one sentence",
        description:
          locale === "fr"
            ? "Affichée en tête d'article. Répondez tout de suite : c'est ce que Google cite."
            : "Shown at the top of the post. Answer immediately: this is what Google quotes.",
        multiline: true,
        validation: { isRequired: true },
      }),
      category: fields.select({
        label: locale === "fr" ? "Catégorie" : "Category",
        options: locale === "fr" ? CATEGORIES_FR : CATEGORIES_EN,
        defaultValue: locale === "fr" ? "Stratégie" : "Strategy",
      }),
      publishedAt: fields.date({
        label: locale === "fr" ? "Date de publication" : "Published on",
        defaultValue: { kind: "today" },
        validation: { isRequired: true },
      }),
      updatedAt: fields.date({
        label: locale === "fr" ? "Dernière mise à jour" : "Last updated",
        description:
          locale === "fr"
            ? "À remplir quand vous retouchez un vieil article : il remonte en tête de la liste."
            : "Set this when you revise an old post: it moves back to the top of the list.",
      }),
      readingMinutes: fields.integer({
        label: locale === "fr" ? "Temps de lecture (minutes)" : "Reading time (minutes)",
        defaultValue: 6,
        validation: { isRequired: true, min: 1, max: 40 },
      }),
      relatedService: fields.select({
        label: locale === "fr" ? "Prestation liée" : "Related service",
        description:
          locale === "fr"
            ? "Le lien interne posé en bas de l'article. Chaque article doit en avoir un."
            : "The internal link placed at the end of the post. Every post needs one.",
        options: SERVICES,
        defaultValue: "website-creation",
      }),
      relatedPosts: fields.array(
        fields.relationship({
          label: locale === "fr" ? "Article" : "Post",
          collection: locale === "fr" ? "posts" : "postsEn",
        }),
        {
          label: locale === "fr" ? "Articles à lire ensuite" : "Read next",
          description: locale === "fr" ? "Deux suffisent." : "Two is enough.",
          itemLabel: (props) => props.value || "Article",
        },
      ),
      pairKey: fields.text({
        label: locale === "fr" ? "Clé de traduction" : "Translation key",
        description:
          locale === "fr"
            ? "La même valeur sur la version française et la version anglaise : c'est ce qui les relie. Utilisez l'adresse de la page française."
            : "The same value on the French and the English version: it is what pairs them. Use the French page address.",
        validation: { isRequired: true },
      }),
      faqs: faqs(locale),
      seo: seo(locale),
      content: fields.markdoc({
        label: locale === "fr" ? "Contenu de l'article" : "Post content",
        components: postComponents,
        options: {
          table: true,
          image: { directory: "public/images/uploads/blog", publicPath: "/images/uploads/blog" },
        },
      }),
    },
  });

/** Real client reviews. Not translated: a review is quoted as it was written. */
const reviews = collection({
  label: "Avis clients",
  path: "content/reviews/*",
  format: { data: "yaml" },
  slugField: "author",
  columns: ["author", "rating", "date"],
  schema: {
    author: fields.slug({
      name: {
        label: "Nom du client",
        description: "Tel qu'il apparaît sur l'avis Google.",
        validation: { isRequired: true },
      },
    }),
    avatar: fields.image({
      label: "Photo (optionnelle)",
      description: "Vide = ses initiales sur fond lime.",
      directory: "public/images/uploads/reviews",
      publicPath: "/images/uploads/reviews",
    }),
    rating: fields.integer({
      label: "Note sur 5",
      defaultValue: 5,
      validation: { isRequired: true, min: 1, max: 5 },
    }),
    text: fields.text({
      label: "L'avis",
      description: "Recopié mot pour mot. Ne le réécrivez pas.",
      multiline: true,
      validation: { isRequired: true },
    }),
    source: fields.select({
      label: "Source",
      options: [
        { label: "Google", value: "google" },
        { label: "WhatsApp", value: "whatsapp" },
        { label: "E-mail", value: "email" },
        { label: "En direct", value: "direct" },
      ],
      defaultValue: "google",
    }),
    sourceUrl: fields.url({ label: "Lien vers l'avis (optionnel)" }),
    date: fields.date({ label: "Date de l'avis", defaultValue: { kind: "today" } }),
    featured: fields.checkbox({
      label: "Mettre en avant",
      description: "Les avis cochés remontent sur la page d'accueil.",
      defaultValue: false,
    }),
  },
});

/** The logo wall. */
const clients = collection({
  label: "Logos clients",
  path: "content/clients/*",
  format: { data: "yaml" },
  slugField: "name",
  columns: ["name"],
  schema: {
    name: fields.slug({ name: { label: "Nom du client", validation: { isRequired: true } } }),
    logo: fields.image({
      label: "Logo",
      description: "PNG sur fond transparent, environ 400 × 170, moins de 100 Ko.",
      directory: "public/images/uploads/clients",
      publicPath: "/images/uploads/clients",
      validation: { isRequired: true },
    }),
    order: fields.integer({ label: "Ordre d'affichage", defaultValue: 10 }),
  },
});


/* ------------------------------------------------------------- projects -- */

/**
 * Réalisations. The French entry holds everything; the English one holds only
 * the translated copy and points at its French twin, so the year, the links,
 * the screenshot and the order can never drift between the two languages —
 * the guarantee lib/en/projects-data.ts used to make in code.
 */
const projects = collection({
  label: "Réalisations",
  path: "content/fr/projects/*",
  format: { data: "yaml" },
  slugField: "title",
  columns: ["title", "category", "year"],
  schema: {
    title: fields.slug({
      name: { label: "Nom du projet", validation: { isRequired: true } },
      slug: {
        label: "Adresse de la page",
        description: "Une fois publiée, ne la changez plus : les liens existants casseraient.",
      },
    }),
    category: fields.text({
      label: "Catégorie",
      description: "Affichée sur la carte : E-commerce, Site vitrine, Plateforme…",
      validation: { isRequired: true },
    }),
    description: fields.text({
      label: "Description",
      description: "Ce que le projet fait, pour qui, et ce qu'il a changé.",
      multiline: true,
      validation: { isRequired: true },
    }),
    screenshot: fields.image({
      label: "Capture d'écran",
      description: "La page d'accueil du site livré. WebP de préférence, moins de 200 Ko.",
      directory: "public/images/work",
      publicPath: "/images/work",
      validation: { isRequired: true },
    }),
    clientUrl: fields.text({ label: "Domaine du client", description: "Sans https://, par exemple exemple.ma" }),
    liveUrl: fields.url({ label: "Lien vers le site en ligne" }),
    year: fields.integer({ label: "Année", defaultValue: new Date().getFullYear() }),
    order: fields.integer({
      label: "Ordre d'affichage",
      description: "Le plus petit nombre passe en premier.",
      defaultValue: 50,
    }),
    featured: fields.checkbox({
      label: "Mettre en avant",
      description: "Les projets cochés remontent sur la page d'accueil.",
      defaultValue: false,
    }),
    stack: fields.array(fields.text({ label: "Technologie" }), {
      label: "Technologies",
      description: "Trois ou quatre suffisent.",
      itemLabel: (props) => props.value || "Technologie",
    }),
    metricValue: fields.text({
      label: "Le chiffre",
      description: "Par exemple +38 % ou 3 200. C'est ce que le visiteur retient.",
    }),
    metricLabel: fields.text({ label: "Ce que le chiffre mesure", description: "Par exemple : demandes de devis" }),
    seo: seo("fr"),
  },
});

const projectsEn = collection({
  label: "Réalisations (anglais)",
  path: "content/en/projects/*",
  format: { data: "yaml" },
  slugField: "title",
  columns: ["title", "frenchProject"],
  schema: {
    title: fields.slug({
      name: { label: "Project name", validation: { isRequired: true } },
      slug: { label: "Page address", description: "The English URL, which differs from the French one on purpose." },
    }),
    frenchProject: fields.relationship({
      label: "French version",
      description: "Pick the project this one translates. Everything else — year, links, screenshot, order — comes from it.",
      collection: "projects",
      validation: { isRequired: true },
    }),
    category: fields.text({ label: "Category", validation: { isRequired: true } }),
    description: fields.text({ label: "Description", multiline: true, validation: { isRequired: true } }),
    stack: fields.array(fields.text({ label: "Technology" }), {
      label: "Technologies",
      itemLabel: (props) => props.value || "Technology",
    }),
    metricValue: fields.text({ label: "The number" }),
    metricLabel: fields.text({ label: "What it measures" }),
    seo: seo("en"),
  },
});


/* -------------------------------------------------------------- pricing -- */

/**
 * Every published price, in one place.
 *
 * The number is written once and both languages' wording sits beside it, so a
 * price cannot be current in French and stale in English. scripts/sync-pairs.ts
 * turns this file into lib/pricing.generated.json before each build, which is
 * what the pages and the {{prix:…}} tokens in the copy read.
 */
const pricing = singleton({
  label: "Tarifs",
  path: "content/pricing",
  format: { data: "yaml" },
  schema: {
    packs: fields.array(
      fields.object({
        service: fields.select({
          label: "Prestation",
          options: SERVICES,
          defaultValue: "website-creation",
        }),
        tiers: fields.array(
          fields.object({
            key: fields.text({
              label: "Clé interne",
              description:
                "Ne la changez pas : c'est elle qui relie ce prix aux phrases du site qui le citent.",
              validation: { isRequired: true },
            }),
            price: fields.text({
              label: "Prix",
              description: "Le nombre seul, espaces compris : 1 899. Sans « DH ».",
              validation: { isRequired: true },
            }),
            unit: fields.text({ label: "Unité (optionnelle)", description: "Par exemple : / jour" }),
            showFrom: fields.checkbox({
              label: "Afficher « à partir de »",
              description: "Décochez pour un prix ferme.",
              defaultValue: true,
            }),
            featured: fields.checkbox({ label: "Mettre en avant (le plus demandé)", defaultValue: false }),
            nameFr: fields.text({ label: "Nom de la formule (FR)", validation: { isRequired: true } }),
            nameEn: fields.text({ label: "Nom de la formule (EN)", validation: { isRequired: true } }),
            noteFr: fields.text({ label: "Sous-titre (FR)", description: "Ce que couvre la formule, en une ligne." }),
            noteEn: fields.text({ label: "Sous-titre (EN)" }),
            featuresFr: fields.array(fields.text({ label: "Ligne" }), {
              label: "Ce qui est compris (FR)",
              itemLabel: (props) => props.value || "Ligne",
            }),
            featuresEn: fields.array(fields.text({ label: "Line" }), {
              label: "Ce qui est compris (EN)",
              itemLabel: (props) => props.value || "Line",
            }),
          }),
          { label: "Formules", itemLabel: (props) => `${props.fields.nameFr.value} — ${props.fields.price.value} DH` },
        ),
      }),
      { label: "Formules par prestation", itemLabel: (props) => props.fields.service.value },
    ),

    addons: fields.array(
      fields.object({
        key: fields.text({ label: "Clé interne", validation: { isRequired: true } }),
        price: fields.text({ label: "Prix", validation: { isRequired: true } }),
        unitFr: fields.text({ label: "Unité (FR)", description: "par page, par mois, forfait…" }),
        unitEn: fields.text({ label: "Unité (EN)" }),
        titleFr: fields.text({ label: "Titre (FR)", validation: { isRequired: true } }),
        titleEn: fields.text({ label: "Titre (EN)", validation: { isRequired: true } }),
        descriptionFr: fields.text({ label: "Description (FR)", multiline: true }),
        descriptionEn: fields.text({ label: "Description (EN)", multiline: true }),
      }),
      { label: "Options (add-ons)", itemLabel: (props) => `${props.fields.titleFr.value} — ${props.fields.price.value} DH` },
    ),

    monthly: fields.array(
      fields.object({
        service: fields.select({ label: "Prestation", options: SERVICES, defaultValue: "whatsapp-bots" }),
        key: fields.text({ label: "Clé de la formule", validation: { isRequired: true } }),
        price: fields.text({ label: "Abonnement mensuel", validation: { isRequired: true } }),
      }),
      {
        label: "Abonnements mensuels",
        description: "Cités à côté d'un prix de mise en place.",
        itemLabel: (props) => `${props.fields.service.value} · ${props.fields.key.value}`,
      },
    ),
  },
});

/* --------------------------------------------------------------- storage -- */

/**
 * Where the dashboard saves.
 *
 * Locally it writes straight to the files in this folder and asks for no login.
 * Deployed with the GitHub App configured, it commits as whoever is signed in,
 * so every change carries an author and can be undone.
 *
 * Two details this encodes, both learned the hard way:
 *
 * 1. Keystatic refuses to build in "github" mode without the two credentials,
 *    which would take the whole site down over a CMS setting. So the mode
 *    follows the credentials: deploy first, add the variables when the App
 *    exists, and the dashboard switches over on the next build.
 * 2. The App is created from the dashboard running in github mode, which is
 *    normally local — so `KEYSTATIC_STORAGE=github` forces that mode on this
 *    machine for the few minutes the setup flow takes.
 */
/* Tolerant on purpose: this value gets pasted into .env by hand, and a stray
   quote or a trailing word used to flip the dashboard back to local mode with
   nothing said about it. */
const STORAGE_OVERRIDE = (process.env.KEYSTATIC_STORAGE ?? "").trim().toLowerCase();
const FORCE_GITHUB = STORAGE_OVERRIDE.split(/\s+/)[0] === "github";

if (STORAGE_OVERRIDE && !FORCE_GITHUB) {
  console.warn(
    `[keystatic] KEYSTATIC_STORAGE is set to "${process.env.KEYSTATIC_STORAGE}", which is not "github", so the dashboard stays in local mode.`,
  );
}
const GITHUB_READY =
  !!process.env.KEYSTATIC_GITHUB_CLIENT_ID && !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;

if (process.env.NODE_ENV !== "development" && !GITHUB_READY) {
  console.warn(
    [
      "[keystatic] No GitHub App configured, so the dashboard cannot save on this deploy.",
      "            Run the site locally with KEYSTATIC_STORAGE=github, open /keystatic,",
      "            and follow the setup. It creates the App and writes the four",
      "            KEYSTATIC_* values, which then go into the host's settings.",
    ].join("\n"),
  );
}

const IS_DEV = process.env.NODE_ENV === "development";

/* In development the override decides, so the setup flow can be run locally.
   Deployed, only the credentials decide — an override left in the host's
   settings would otherwise fail every build. */
const STORAGE = (IS_DEV ? FORCE_GITHUB : GITHUB_READY)
  ? ({ kind: "github", repo: { owner: "website-devloper", name: "Wevtex" } } as const)
  : ({ kind: "local" } as const);

/* ---------------------------------------------------------------- config -- */

export default config({
  storage: STORAGE,
  ui: {
    brand: { name: "Wevtex" },
    navigation: {
      Contenu: ["posts", "postsEn", "projects", "projectsEn", "reviews", "clients"],
      "Réglages": ["pricing"],
    },
  },
  singletons: { pricing },
  collections: {
    posts: post("fr"),
    postsEn: post("en"),
    projects,
    projectsEn,
    reviews,
    clients,
  },
});
