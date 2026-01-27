import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import { FaGithub } from "react-icons/fa";
import SEO from "../components/ui/SEO.jsx";

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="CB Hayes - UX Architect and Frontend Developer"
        url="/"
      />
      <Section>
        <Container>
          <h1 className="heading-hero">
            Hi, my name is CB Hayes, I create things for the web.
          </h1>
          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating beautiful,
            accessible, and user-friendly web experiences."
          </h2>
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            <Button as="a" href="/portfolio" variant="primary">
              Check out my work
            </Button>
            <Button as="a" href="/resume" variant="secondary">
              View my resume
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
