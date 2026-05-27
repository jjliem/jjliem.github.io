import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

// Placeholder pages
function Home() {
  return <h1 className="text-3xl font-bold">Home</h1>;
}

function About() {
  return <h1 className="text-2xl font-semibold">About Me</h1>;
}

function Portfolio() {
  return <h1 className="text-2xl font-semibold">Portfolio</h1>;
}

function Resume() {
  return <h1 className="text-2xl font-semibold">Resume</h1>;
}

function Contact() {
  return <h1 className="text-2xl font-semibold">Contact</h1>;
}

// Sidebar component
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">My Portfolio</h2>

      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        About
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Portfolio
      </NavLink>

      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Resume
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        Contact
      </NavLink>
    </aside>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">

        {/* Left Drawer Navigation */}
        <Sidebar />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <footer className="footer">
            © {new Date().getFullYear()} Your Name — Full Stack Developer
          </footer>
        </main>
      </div>
    </Router>
  );
}

export default App;
