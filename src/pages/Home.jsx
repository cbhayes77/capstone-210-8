import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";

export default function Home() {
  return (
    <div>
      <Section>
        <Container>
          <h1 className="heading-hero">Hi, my name is CB Hayes, I create things for the web.</h1>
          <h2 className="mt-4 body-large">
            I'm a UX Designer and Frontend Developer passionate about creating beautiful, accessible, and user-friendly
            web experiences."
          </h2>
        </Container>
      </Section>
    </div>
  );
}
