import { NavLink } from "react-router-dom";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
      <Container className="flex h-16 items-center">
        <div className="flex flex-1 justify-start">
          <a href="/" className="flex items-center gap-2">
            <span className="text-white font-semibold">CB Hayes</span>
          </a>
        </div>

        <nav className="flex justify-center flex-none">
          <ul className="flex items-center gap-6 body-small">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-white ${
                    isActive ? "text-white" : "text-white/70"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-white ${
                    isActive ? "text-white" : "text-white/70"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-white ${
                    isActive ? "text-white" : "text-white/70"
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-white ${
                    isActive ? "text-white" : "text-white/70"
                  }`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-white ${
                    isActive ? "text-white" : "text-white/70"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex flex-1 justify-end">
          <Button as="a" href="/contact" variant="primary" size="sm">
            Contact Me
          </Button>
        </div>
      </Container>
    </header>
  );
}
