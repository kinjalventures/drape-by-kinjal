import { type ReactNode } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

// ─── Nav links ────────────────────────────────────────────────────────────────
const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
] as const;

// ─── Header ───────────────────────────────────────────────────────────────────
function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold text-primary">Indian Glam</span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            by Kinjal · Wesley Chapel · Tampa Bay
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={'exact' in l ? l.exact : false}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full border border-primary bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile book button */}
        <Link
          to="/contact"
          className="md:hidden rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
        >
          Book
        </Link>
      </div>

      {/* Mobile bottom nav */}
      <nav className="flex items-center justify-center gap-5 border-t border-border/40 px-5 py-2 text-sm md:hidden">
        {navLinks.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={'exact' in l ? l.exact : false}
            className={({ isActive }) =>
              `text-xs tracking-wide ${isActive ? "text-primary" : "text-foreground/70"}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-[color:var(--magenta-deep)] text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl">Indian Glam</h3>
          <p className="mt-3 text-sm text-ivory/75">
            Traditional Indian outfit draping by Kinjal, styled with love in Wesley Chapel, Florida.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Visit</h4>
          <p className="mt-3 text-sm text-ivory/80">
            Wesley Chapel, FL<br />Serving the Tampa Bay area<br />By appointment only
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Connect</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="https://wa.me/18130000000" target="_blank" rel="noreferrer" className="hover:text-[color:var(--gold)]">
                WhatsApp · (813) 000-0000
              </a>
            </li>
            <li>
              <a href="https://instagram.com/drapedbykinjal" target="_blank" rel="noreferrer" className="hover:text-[color:var(--gold)]">
                Instagram · @drapedbykinjal
              </a>
            </li>
            <li>
              <a href="mailto:hello@drapedbykinjal.com" className="hover:text-[color:var(--gold)]">
                hello@drapedbykinjal.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/60">
        © {new Date().getFullYear()} Indian Glam by Kinjal. All rights reserved.
      </div>
    </footer>
  );
}

// ─── 404 ──────────────────────────────────────────────────────────────────────
function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Layout wrapper ───────────────────────────────────────────────────────────
function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  );
}
