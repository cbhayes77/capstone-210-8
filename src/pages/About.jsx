import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";
import { aboutData } from "../data/about.js";
import { FaCamera } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaHiking } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about me, my background, values, and experience."
        url="/about"
      />

      {/* Hero/Intro Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-page">About Me</h1>
            <div className="mt-6 space-y-4, body-default">
              <p className="text-lg leading-relaxed">{aboutData.bio.intro}</p>
              <p>{aboutData.bio.background}</p>
              <p>{aboutData.bio.current}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section text-center mb-12">What Drives My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {aboutData.values.map((value) => (
                <article
                  key={value.id}
                  role="listitem"
                  className="card-base p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="subheading-primary mb-2">{value.title}</h3>
                  <p className="body-default text-white/70">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-12">Professional Journey</h2>
            <ol className="space-y-8" aria-label="Professional experience timeline">
              {aboutData.experience.map((job) => (
                <li
                  key={job.id}
                  className="relative pl-8 border-l-2 border-white/20 pb-8 last:pb-0"
                  aria-hidden="true"
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
                    aria-hidden="true"
                  ></div>
                  <article>
                    <header className="mb-2">
                      <h3 className="subheading-primary">{job.role}</h3>
                      <p className="body-default text-white/70">
                        <span className="sr-only">at</span> {job.company}{" "}
                        <span aria-hidden="true">&bull;</span>
                        <time>{job.duration}</time>
                      </p>
                    </header>

                    <p className="body-default mb-3">{job.description}</p>

                    {job.achievements && job.achievements.length > 0 && (
                      <>
                        <h4 className="sr-only">Key Achievements</h4>
                        <ul className="list-disc pl-5 body-default text-white/70 space-y-1">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
    </>
  );
}
