import { Outlet } from "react-router-dom";
import ErrorBoundary from "./components/ui/ErrorBoundary.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
