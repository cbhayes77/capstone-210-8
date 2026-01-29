import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects({
  limit,
  showViewMore = true,
  title = "My Portfolio",
  description = "Description goes here",
  headingLevel = "h2",
  headingId = "projects-heading",
}) {
  // Apply a limit of records if specified, otherwise, show all projects
  const displayedProjects = limit ? projects.slice(0, limit) : projects;
  const HeadingComponent = headingLevel;

  return (
    <Section>
      <Container>{/_ Projects will go here _/}</Container>
    </Section>
  );
}
