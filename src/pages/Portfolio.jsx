import Projects from "../components/sections/Projects.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore my work and projects showcasing my skills as a Frontend Developer"
        url="/portfolio"
      />
      <Projects
        title="Portfolio"
        description="Click any card to view details"
        headingLevel="h1"
        headingId="portfolio-heading"
        showViewMore={false}
      />
    </>
  );
}
