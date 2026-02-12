import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials({ headingLevel = "h2", limit }) {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const HeadingComponent = headingLevel;

  return (
    <Section aria-labelledby="testimonials-heading">
      <Container>
        {/* Section Heading */}
        <header className="text-center">
          <HeadingComponent id="testimonials-heading" className="heading-section">
            Testimonials
          </HeadingComponent>
          <p className="mt-2 text-white/80">
            A few quotes from people I've worked with and worked for.
          </p>
        </header>
        {/* Testimonial Cards Grid */}
        <ul
          className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {displayedTestimonials.map((t) => (
            <li key={t.id}>
              <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
