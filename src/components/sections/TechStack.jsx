import Section from "../ui/Section.jsx";
import Container from "../ui/Container.jsx";
import { techstack } from "../../data/techstack.js";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStack() {
  const iconMap = {
    html5: FaHtml5,
    css3: FaCss3Alt,
    javascript: FaJs,
    react: FaReact,
    tailwind: SiTailwindcss,
  };

  return (
    <Section>
      <Container>
        <h2 className="heading-section">My Tech Stack</h2>
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {techstack.map((tech) => {
            const IconComponent = iconMap[tech.iconId];
            return (
              <div key={tech.id} className="text-center">
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent
                        className="h-12 w-12"
                        style={{ color: tech.color }}
                      />
                    )}
                  </div>
                  <p className="mt-2 text-sm">{tech.label}</p>
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
