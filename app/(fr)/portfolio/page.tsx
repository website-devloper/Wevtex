import { PortfolioView } from "@/components/wevtex/PortfolioView";
import { PROJECTS_ORDERED } from "@/lib/projects-data";

/* Metadata and the ItemList schema live in ./layout.tsx. */
export default function PortfolioPage() {
  return <PortfolioView projects={PROJECTS_ORDERED} />;
}
