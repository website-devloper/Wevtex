/**
 * City landing pages.
 *
 * "agence web casablanca" is searched more than "agence web maroc" and is far
 * less contested, so one page per city is the strongest ranking lever available.
 *
 * The copy for each city is written from that city's actual economy — the port
 * and the CBD in Casablanca, the riads and tour operators in Marrakech, the
 * ministries in Rabat. A find-and-replace of the city name into one template is
 * detected and discounted by Google, and it reads as filler to a human too, so
 * every paragraph below is specific to its city.
 *
 * No claim is made about having an office or clients in a city other than
 * Casablanca; the pages say plainly that the studio is Casablanca-based and
 * works remotely.
 */

import { fillPricesDeep } from "./pricing";
import { CITY_LINKS } from "./city-list";

export type City = {
  slug: string;
  /** Hero backdrop at /images/villes/<slug>.webp. */
  name: string;
  /** "à Casablanca" / "à Rabat" — used inside sentences. */
  inCity: string;
  title: string;
  metaDescription: string;
  h1: string;
  h1Em: string;
  intro: string;
  /** The local economic picture. Two paragraphs, city-specific. */
  context: string[];
  /** Sectors that actually dominate locally. */
  sectors: { h: string; p: string }[];
  /** Why a Casablanca studio is the right call for this city. */
  proximity: string;
  faqs: { q: string; a: string }[];
};

export const CITIES: City[] = fillPricesDeep([
  {
    slug: "agence-web-casablanca",
    name: "Casablanca",
    inCity: "à Casablanca",
    title: "Agence Web & Marketing Digital à Casablanca | WEVTEX",
    metaDescription:
      "Agence web à Casablanca : création de sites vitrines, boutiques en ligne, applications et SEO. Studio basé à Casablanca, devis gratuit et délai ferme.",
    h1: "Agence web à",
    h1Em: "Casablanca.",
    intro:
      "À Casablanca, votre client compare trois sites avant d'appeler. Agence web basée à Casablanca, nous créons le site, la boutique ou l'application qui fait qu'il vous choisit, vous, avec un devis clair en dirhams et un délai ferme.",
    context: [
      "Casablanca concentre l'essentiel de l'activité économique marocaine : le port, la place financière de Casa Finance City, les zones industrielles d'Ain Sebaâ et de Sidi Bernoussi, et un tissu dense de PME du Maârif, de Gauthier et de Bourgogne. La concurrence en ligne y est plus forte qu'ailleurs au Maroc, ce qui change la manière de construire un site : être présent ne suffit pas, il faut être trouvé avant les autres.",
      "Concrètement, cela veut dire un site qui se charge vite sur un réseau mobile, des pages écrites pour les recherches que font vos clients, et une fiche Google Business tenue à jour. C'est ce trio qui décide si un commerce du Maârif ou un cabinet de Casa Finance City reçoit des demandes, ou reste invisible derrière trois annuaires.",
    ],
    sectors: [
      { h: "Commerce & e-commerce", p: "Boutiques du Maârif, de Californie ou d'Anfa qui veulent vendre en ligne autant qu'en boutique, avec le paiement local et la livraison sur Casablanca." },
      { h: "Services professionnels", p: "Cabinets d'avocats, experts-comptables et conseils de Casa Finance City et du centre, pour qui le site est le premier filtre de crédibilité." },
      { h: "Industrie & logistique", p: "Sociétés d'Ain Sebaâ, de Sidi Bernoussi et de la zone portuaire : catalogues techniques, demandes de devis et portails fournisseurs." },
      { h: "Santé & bien-être", p: "Cliniques et cabinets de Bourgogne, Gauthier et Racine, avec prise de rendez-vous en ligne et rappels automatiques." },
    ],
    proximity:
      "Notre studio est à Casablanca. Nous pouvons vous rencontrer sur place quand c'est utile, et travailler à distance quand ça ne l'est pas, la plupart de nos projets avancent par des points hebdomadaires courts, sans réunion inutile.",
    faqs: [
      { q: "Combien coûte un site web à Casablanca ?", a: "Nos formules démarrent à {{prix:website-creation/Vitrine}} DH pour un site vitrine simple. Une boutique en ligne ou une application se situe plus haut, selon le nombre de pages, les fonctionnalités et le contenu à produire. Vous recevez un devis ferme avant tout démarrage." },
      { q: "Travaillez-vous avec des entreprises hors de Casablanca ?", a: "Oui. Nous sommes basés à Casablanca et travaillons à distance avec des clients partout au Maroc et à l'international, en français, en darija ou en anglais." },
      { q: "Combien de temps pour créer un site à Casablanca ?", a: "Un site vitrine part en ligne en 2 à 4 semaines, une boutique en ligne en 4 à 8. Le délai est fixé dans le devis avant que le travail ne commence." },
      { q: "Faites-vous le référencement local sur Casablanca ?", a: "Oui. Nous optimisons votre fiche Google Business, vos pages pour les recherches locales et votre présence sur Google Maps, pour que vous apparaissiez quand quelqu'un cherche votre service près de chez lui." },
      { q: "Êtes-vous une agence digitale et de marketing digital à Casablanca ?", a: "Oui. Basée à Casablanca, Wevtex réunit développeur web, agence SEO, agence de création de site web et agence de communication digitale dans la même équipe. Pour une entreprise de Casablanca, cela veut dire un seul interlocuteur, du site aux campagnes Google et Meta." },
    ],
  },
  {
    slug: "agence-web-rabat",
    name: "Rabat",
    inCity: "à Rabat",
    title: "Agence Web & Marketing Digital à Rabat | WEVTEX",
    metaDescription:
      "Agence web pour Rabat : sites, applications et référencement. Studio basé à Casablanca, à une heure de Rabat. Devis gratuit, délai ferme.",
    h1: "Agence web à",
    h1Em: "Rabat.",
    intro:
      "Nous créons des sites, des applications et des dispositifs de référencement pour les organisations de Rabat. Studio basé à Casablanca, à une heure de train, assez près pour se voir, assez organisé pour ne pas avoir à le faire souvent.",
    context: [
      "Rabat n'est pas Casablanca. C'est une capitale administrative : ministères, agences publiques, ambassades, ONG, universités et un écosystème de bureaux d'études et de cabinets qui gravitent autour. Les attentes en ligne y sont différentes, on y regarde d'abord la clarté, l'accessibilité et le sérieux, avant le spectaculaire.",
      "Un site qui fonctionne à Rabat est donc un site lisible, accessible aux personnes en situation de handicap, rapide même sur une connexion moyenne, et structuré pour qu'une information officielle se trouve en deux clics. C'est aussi souvent un site multilingue, français et arabe, ce que nous prenons en charge dès la conception plutôt qu'après coup.",
    ],
    sectors: [
      { h: "Secteur public & associations", p: "Sites accessibles et clairs pour agences, ONG et associations : information, formulaires, dons et gestion des adhérents." },
      { h: "Éducation & formation", p: "Universités, écoles et organismes de formation de l'Agdal et de Hay Riad : programmes, inscriptions en ligne et espaces apprenants." },
      { h: "Services professionnels", p: "Bureaux d'études, cabinets de conseil et professions réglementées, pour qui le site doit inspirer confiance avant le premier rendez-vous." },
      { h: "Santé", p: "Cabinets et cliniques avec prise de rendez-vous en ligne et présentation claire des soins." },
    ],
    proximity:
      "Nous sommes à Casablanca, à une heure de Rabat en train. Nous nous déplaçons pour les réunions qui le méritent, un cadrage de projet, une présentation à un comité, et travaillons à distance le reste du temps.",
    faqs: [
      { q: "Faites-vous des sites bilingues français-arabe ?", a: "Oui. Le bilinguisme est prévu dès la conception : structure des pages, sens de lecture, typographie et référencement dans les deux langues, plutôt qu'une traduction ajoutée après coup." },
      { q: "Vous déplacez-vous à Rabat ?", a: "Oui, pour les réunions qui le justifient : cadrage de projet, présentation à un comité, formation à la prise en main. Le reste du suivi se fait à distance, par points courts et réguliers." },
      { q: "Travaillez-vous avec des administrations et des associations ?", a: "Oui. Ces projets demandent surtout de l'accessibilité et de la clarté : contrastes suffisants, navigation au clavier, contenus lisibles et formulaires simples. Nous les traitons comme des exigences de départ, pas comme des options." },
      { q: "Êtes-vous une agence de communication et de création de site web à Rabat ?", a: "Oui. Agence digitale basée à Casablanca, à une heure de train de Rabat, nous y sommes votre développeur web, votre agence SEO et votre agence de marketing digital. Nous accompagnons entreprises, cabinets et institutions, avec des réunions sur place quand le projet le justifie." },
    ],
  },
  {
    slug: "agence-web-marrakech",
    name: "Marrakech",
    inCity: "à Marrakech",
    title: "Agence Web & Marketing Digital à Marrakech | WEVTEX",
    metaDescription:
      "Agence web pour Marrakech : sites de riads, hôtels, restaurants et boutiques, avec réservation en direct et SEO local. Devis gratuit, délai ferme.",
    h1: "Agence web à",
    h1Em: "Marrakech.",
    intro:
      "À Marrakech, un site sert surtout à une chose : faire réserver en direct plutôt que via une plateforme qui prend sa commission. Nous construisons des sites de riads, d'hôtels, de restaurants et de boutiques qui reprennent cette réservation à leur compte.",
    context: [
      "L'économie de Marrakech tourne autour du visiteur : riads de la médina, hôtels de l'Hivernage, restaurants de Guéliz, boutiques d'artisanat, agences d'excursions. La plupart de ces établissements dépendent de Booking, d'Airbnb ou de TripAdvisor pour leur remplissage, et versent 15 à 20 % de commission sur chaque nuitée.",
      "Un site bien construit ne remplace pas ces plateformes, il récupère la part de clients qui vous cherchent déjà par votre nom. C'est le trafic le plus rentable qui existe : quelqu'un qui tape le nom de votre riad est prêt à réserver, et chaque réservation prise chez vous est une commission que vous ne versez pas.",
    ],
    sectors: [
      { h: "Hôtellerie & riads", p: "Moteur de réservation en direct, calendrier de disponibilités, galeries qui donnent envie et pages traduites pour vos marchés émetteurs." },
      { h: "Restauration", p: "Menus illustrés et à jour, réservation de table, avis Google et référencement local pour capter les recherches sur place." },
      { h: "Commerce & artisanat", p: "Boutiques en ligne pour vendre l'artisanat marocain à l'international, avec gestion multidevise et livraison." },
      { h: "Excursions & expériences", p: "Catalogue d'activités, réservation en ligne et pages positionnées sur les recherches faites avant le départ." },
    ],
    proximity:
      "Nous sommes basés à Casablanca et travaillons avec Marrakech à distance. En pratique, cela ne change rien au projet : points hebdomadaires, maquettes partagées en ligne, et un interlocuteur unique joignable sur WhatsApp.",
    faqs: [
      { q: "Pouvez-vous ajouter un moteur de réservation à mon riad ?", a: "Oui. Nous intégrons un moteur de réservation en direct sur votre site, avec calendrier de disponibilités et paiement en ligne, pour que vous encaissiez sans commission de plateforme." },
      { q: "Faites-vous des sites multilingues pour les clients étrangers ?", a: "Oui. Français, anglais et espagnol sont les combinaisons les plus demandées à Marrakech. Le multilingue est prévu dès la structure du site, ce qui permet aussi d'être référencé dans chaque langue." },
      { q: "Puis-je garder Booking en parallèle de mon site ?", a: "Bien sûr. L'objectif n'est pas de quitter les plateformes, mais de récupérer les réservations des clients qui vous cherchent déjà par votre nom, ce sont celles qui vous coûtent le plus cher en commission." },
      { q: "Êtes-vous une agence digitale et de communication à Marrakech ?", a: "Oui, à distance depuis Casablanca. Pour les riads, hôtels, restaurants, artisans et agences de voyage de Marrakech, notre rôle d'agence de marketing digital couvre la création de site web multilingue, la réservation directe, le référencement et les campagnes qui ramènent des visiteurs étrangers. À Marrakech, le même interlocuteur est votre développeur web et votre agence SEO, pour être trouvé en français comme en anglais." },
    ],
  },
  {
    slug: "agence-web-fes",
    name: "Fès",
    inCity: "à Fès",
    title: "Agence Web & Marketing Digital à Fès | WEVTEX",
    metaDescription:
      "Agence web pour Fès : sites d'artisans, de riads et de commerces, e-commerce et référencement local. Studio basé à Casablanca. Devis gratuit.",
    h1: "Agence web à",
    h1Em: "Fès.",
    intro:
      "Fès vit de son artisanat, de son patrimoine et de ses écoles. Nous y construisons des sites qui donnent à ce savoir-faire une vitrine à sa hauteur, et un moyen de vendre au-delà de la médina.",
    context: [
      "Fès concentre le plus grand héritage artisanal du Maroc : dinanderie, zellige, tannerie, broderie, poterie de Aïn Nokbi. La demande existe bien au-delà de la ville, en Europe et en Amérique du Nord, mais elle se heurte presque toujours au même mur : un atelier reconnu localement n'a aucune existence en ligne, et l'acheteur étranger passe à un revendeur qui, lui, en a une.",
      "L'enjeu n'est donc pas la notoriété locale, qui est déjà acquise, mais la crédibilité à distance : des photos qui rendent justice à la pièce, une description qui explique la technique, une expédition claire et un moyen de payer. C'est ce qui sépare un atelier qui exporte d'un atelier qui attend le passage.",
    ],
    sectors: [
      { h: "Artisanat & export", p: "Boutiques en ligne pour la dinanderie, le zellige, le cuir et la poterie, avec multidevise, expédition internationale et fiches qui expliquent la technique." },
      { h: "Riads & hôtellerie", p: "Réservation en direct pour les riads de la médina, plutôt que des nuitées qui partent en commission." },
      { h: "Éducation & formation", p: "Universités, écoles et instituts : programmes, inscriptions en ligne et espaces pour les apprenants." },
      { h: "Commerce & services", p: "Commerces de Ville Nouvelle et prestataires locaux, avec fiche Google Business et référencement local." },
    ],
    proximity:
      "Notre studio est à Casablanca et nous travaillons avec Fès à distance : maquettes partagées en ligne, points hebdomadaires et un interlocuteur unique joignable sur WhatsApp.",
    faqs: [
      { q: "Pouvez-vous créer une boutique pour vendre l'artisanat à l'étranger ?", a: "Oui. C'est un cas fréquent : catalogue traduit, gestion multidevise, frais d'expédition internationaux et fiches produits qui expliquent la technique et l'origine, c'est ce qui rassure un acheteur qui ne peut pas toucher la pièce." },
      { q: "Faites-vous des sites pour les riads de la médina ?", a: "Oui, avec un moteur de réservation en direct. Chaque réservation prise sur votre site est une commission de plateforme que vous ne versez pas." },
      { q: "Travaillez-vous à distance avec Fès ?", a: "Oui. Tout se suit en ligne : maquettes consultables, points hebdomadaires et WhatsApp aux horaires de bureau. Le projet avance exactement comme s'il était à Casablanca." },
      { q: "Êtes-vous une agence de création de site web et de marketing digital à Fès ?", a: "Oui, depuis Casablanca. Pour les artisans, maisons d'hôtes, écoles et commerces de Fès, notre équipe d'agence digitale et de communication crée le site, la boutique en ligne qui vend l'artisanat à l'étranger et le référencement local, en agence de marketing digital complète. À Fès, nous intervenons aussi comme développeur web et comme agence SEO pour les recherches locales." },
    ],
  },
  {
    slug: "agence-web-tanger",
    name: "Tanger",
    inCity: "à Tanger",
    title: "Agence Web & Marketing Digital à Tanger | WEVTEX",
    metaDescription:
      "Agence web pour Tanger : sites industriels et logistiques, e-commerce et applications. Studio basé à Casablanca. Devis gratuit et délai ferme.",
    h1: "Agence web à",
    h1Em: "Tanger.",
    intro:
      "Tanger est devenue une ville industrielle et logistique avant d'être une ville touristique. Nous y construisons des sites qui servent d'abord à être trouvés par des acheteurs professionnels, et à envoyer un devis plus vite.",
    context: [
      "Tanger Med, la zone franche et les écosystèmes automobile, textile et aéronautique ont fait de la région un pôle industriel qui traite avec l'Europe au quotidien. Le client type n'est pas un particulier : c'est un acheteur, un donneur d'ordre ou un partenaire logistique qui cherche un fournisseur et compare trois sites en dix minutes.",
      "Un site industriel efficace n'a donc pas besoin d'être spectaculaire. Il lui faut des fiches techniques claires, des références vérifiables, une demande de devis qui prend trente secondes, et des pages écrites pour les recherches B2B en français, en anglais et parfois en espagnol.",
    ],
    sectors: [
      { h: "Industrie & sous-traitance", p: "Catalogues techniques, certifications, capacités de production et demande de devis simplifiée pour les donneurs d'ordre européens." },
      { h: "Logistique & transport", p: "Suivi d'expédition, portails partenaires et pages positionnées sur les recherches de prestataires import-export." },
      { h: "Commerce & e-commerce", p: "Boutiques en ligne pour vendre au Maroc et à l'export, avec gestion des stocks et paiement sécurisé." },
      { h: "Hôtellerie", p: "Réservation en direct pour les établissements de la baie et du centre-ville." },
    ],
    proximity:
      "Studio basé à Casablanca, en liaison quotidienne avec Tanger à distance. Nos projets avancent par points hebdomadaires courts et une maquette consultable en ligne à chaque étape.",
    faqs: [
      { q: "Faites-vous des sites en anglais et en espagnol ?", a: "Oui. Pour Tanger, l'anglais et l'espagnol sont souvent aussi importants que le français, en particulier pour l'industrie et la logistique. Chaque langue est référencée séparément, pas simplement traduite." },
      { q: "Pouvez-vous connecter le site à nos outils internes ?", a: "Oui. Nous relions le site à vos outils existants, ERP, gestion de stock, suivi d'expédition, ou construisons l'outil manquant quand aucune solution du marché ne convient." },
      { q: "Combien coûte un site vitrine industriel ?", a: "Nos formules démarrent à {{prix:website-creation/Vitrine}} DH pour un site vitrine simple. Un site avec catalogue technique, espace documents et demande de devis structurée se situe plus haut ; le devis est ferme avant démarrage." },
      { q: "Êtes-vous une agence digitale ou de communication à Tanger ?", a: "Oui, depuis Casablanca. Pour les industriels, logisticiens et exportateurs de Tanger, notre travail d'agence de marketing digital et de création de site web porte surtout sur le site multilingue, le catalogue technique et la demande de devis B2B, puis sur le SEO et les campagnes vers l'Europe. Pour une entreprise de Tanger, nous tenons aussi le rôle de développeur web et d'agence SEO, du catalogue au positionnement sur Google." },
    ],
  },
  {
    slug: "agence-web-agadir",
    name: "Agadir",
    inCity: "à Agadir",
    title: "Agence Web & Marketing Digital à Agadir | WEVTEX",
    metaDescription:
      "Agence web pour Agadir : sites d'hôtels, de coopératives et de commerces, e-commerce et SEO local. Studio basé à Casablanca. Devis gratuit.",
    h1: "Agence web à",
    h1Em: "Agadir.",
    intro:
      "Agadir vit du tourisme, de la pêche et de l'agriculture du Souss. Nous y construisons des sites pour des établissements et des producteurs qui veulent vendre en direct, au visiteur comme à l'export.",
    context: [
      "La région combine deux économies qui se croisent peu en ligne : le tourisme balnéaire, avec ses hôtels et ses résidences, et l'agroalimentaire du Souss, coopératives d'argan, primeurs, conserveries, qui exporte vers l'Europe. Les deux ont le même angle mort : une présence en ligne trop mince pour capter la demande qui les cherche déjà.",
      "Pour un hôtel, cela se traduit par des réservations qui partent en commission. Pour une coopérative, par des acheteurs étrangers qui ne trouvent aucun site crédible et passent à un concurrent qui en a un. Dans les deux cas, un site correct et une fiche Google tenue à jour changent le résultat.",
    ],
    sectors: [
      { h: "Hôtellerie & résidences", p: "Réservation en direct, galeries, pages traduites et référencement sur les recherches de séjour à Agadir et Taghazout." },
      { h: "Agroalimentaire & coopératives", p: "Sites vitrines crédibles pour l'argan, les primeurs et la conserverie, pensés pour les acheteurs à l'export." },
      { h: "Commerce local", p: "Boutiques en ligne et référencement local pour les commerces du centre et de la marina." },
      { h: "Services & santé", p: "Cabinets et prestataires locaux, avec prise de rendez-vous et présence sur Google Maps." },
    ],
    proximity:
      "Nous travaillons avec Agadir à distance depuis Casablanca. Tout se suit en ligne : maquettes partagées, points hebdomadaires, et un interlocuteur joignable sur WhatsApp aux horaires de bureau.",
    faqs: [
      { q: "Pouvez-vous créer un site pour une coopérative ?", a: "Oui. L'enjeu pour une coopérative est la crédibilité auprès d'acheteurs qui ne vous connaissent pas : certifications, capacités, traçabilité et contact direct, présentés clairement et traduits pour vos marchés." },
      { q: "Faites-vous le référencement local sur Agadir ?", a: "Oui. Fiche Google Business, pages optimisées pour les recherches locales et positionnement sur Maps, pour apparaître quand quelqu'un cherche votre service sur place." },
      { q: "Travaillez-vous à distance ?", a: "Oui, c'est notre mode de travail avec Agadir. Maquettes en ligne, points hebdomadaires et un interlocuteur unique, le projet avance exactement comme s'il était à Casablanca." },
      { q: "Êtes-vous une agence digitale et de communication à Agadir ?", a: "Oui, à distance depuis Casablanca. Pour les hôtels, écoles de surf, exportateurs agricoles et commerces d'Agadir, nous sommes à la fois l'agence de développement web, l'agence de marketing digital et l'agence de création de site web ou de boutique en ligne. Les entreprises d'Agadir trouvent chez nous un développeur web et une agence SEO, joignables sur WhatsApp." },
    ],
  },
]);

export const CITY_SLUGS = CITIES.map((c) => c.slug);

/* The client navigation imports lib/city-list (slug + name only) so the city
   paragraphs never reach the browser. The two lists must agree. */
const navList = CITY_LINKS.map((c) => `${c.slug}:${c.name}`).join("|");
const pageList = CITIES.map((c) => `${c.slug}:${c.name}`).join("|");
if (navList !== pageList) {
  throw new Error(`lib/city-list.ts is out of sync with lib/cities-data.ts: ${navList} != ${pageList}`);
}
