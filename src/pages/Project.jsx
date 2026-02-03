import { useParams, useNavigate } from "react-router-dom";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../components/ui/SEO.jsx";
import { projects } from "../data/projects.js";
/*import Breadcrumb from "../components/ui/Breadcrumb.jsx";*/

export default function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <Section>
        <Container>
          <h1 className="heading-section">Project Not Found</h1>
          <p className="mt-2 body-default">
            We couldn't find a project at /portfolio/{slug}
          </p>
          <div className="mt-6">
            <Button onClick={() => navigate(-1)} variant="secondary">
              Go Back
            </Button>
          </div>
        </Container>
      </Section>
    );
  }
  return (
    <Section>
      <SEO
        title={project.title}
        description={project.blurb}
        url={`/portfolio/${project.id}`}
        image={project.image}
      />
      <Container>
        <nav>
          <Button
            onClick={() => navigate(-1)}
            variant="link"
            leftIcon={<FaArrowLeft className="w-2 h-4" />}
          >
            Go Back
          </Button>
        </nav>

        <header className="mt-4 max-w-3xl">
          <h1 className="heading-page">{project.title}</h1>
          <p className="mt-2 body-default">{project.blurb}</p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card-base rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} hero`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          {/* Project Details on Right */}
          <div>
            <h2 className="subheading-primary">Overview</h2>
            <p className="mt-2 body-default">
              {project.overview || "No overview available for this project."}
            </p>
            {project.highlights && project.highlights.length > 0 && (
              <>
                <h3 className="mt-6 font-semibold">Highlights</h3>
                <ul className="mt-2 list-disc pl-5 body-default space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}

            {(project.role || project.tools || project.timeline || project.client) && (
              <>
                <h3 className="mt-6 font-semibold">Project Details</h3>
                <div className="mt-2 body-default space-y-2">
                  {/* Additional project data area */}
                  {project.role && (
                    <p>
                      <span className="font-medium">Role: </span>
                      {project.role}
                    </p>
                  )}
                  {project.tools && project.tools.length > 0 && (
                    <p>
                      <span className="font-medium">Tools: </span>
                      {project.tools.join(", ")}
                    </p>
                  )}
                  {project.timeline && (
                    <p>
                      <span className="font-medium">Timeline: </span>
                      {project.timeline}
                    </p>
                  )}
                  {project.client && (
                    <p>
                      <span className="font-medium">Client: </span>
                      {project.client}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
