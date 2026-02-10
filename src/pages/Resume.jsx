import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Resume() {
  return (
    <>
      <SEO
        title="Resume"
        description="View my resume and download a PDF version."
        url="/resume"
      />
      <Section>
        <Container>
          <h1 className="heading-page">Resume</h1>
          <div className="mt-6">
            <iframe
              src="/resume.pdf"
              width="100%"
              height="800px"
              title="Chris Hayes Resume"
              className="border border-gray-300 rounded-lg shadow-lg"
            >
              <p>Your browser does not support iframes.</p>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Click here to view the PDF directly
              </a>
            </iframe>
          </div>
        </Container>
      </Section>
    </>
  );
}
