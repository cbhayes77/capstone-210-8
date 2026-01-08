import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Navbar will go here later */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      {/* Footer will go here later */}
    </div>
  );
}
