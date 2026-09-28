import { PortfolioView } from "@/components/wevtex/PortfolioView";
import { getProjects } from "@/lib/content";

/* Metadata and the ItemList schema live in ./layout.tsx. */
export default async function PortfolioPage() {
  return <PortfolioView projects={await getProjects("fr")} />;
}
