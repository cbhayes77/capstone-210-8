import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvzbznjr");
  if (state.succeeded) {
    return (
      <p className="text-center body-default">
        Thanks for contacting me. I'll get back with you ASAP.
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className="label-form">
        Email Address
      </label>
      <input
        className="w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition mb-8"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="label-form">
        Message
      </label>
      <textarea
        className="w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition"
        id="message"
        name="message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button className="mt-8" type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
}
export default function Contact() {
  return (
    <Section>
      <SEO
        title="Contact"
        description="Get in touch with us for any inquiries or support. We're here to help you with your needs."
        url="/contact"
      />
      <Container className="max-w-2xl">
        <header className="text-center">
          <h1 className="heading-page">Get in Touch With Me</h1>
          <p className="mt-2 body-default mb-8">
            Ready to work together? Send me a message and I'll get back to you ASAP.
          </p>
        </header>
        {/* Contact Form */}
        <ContactForm />
      </Container>
    </Section>
  );
}
