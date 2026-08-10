import { useEffect } from "react";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Slower, controlled smooth-scroll for every in-page (#anchor) link.
// Native CSS scroll-behavior can't be tuned and felt too fast on short hops.
const NAV_OFFSET = 72; // fixed-header height to leave above the target section
const DURATION = 750; // ms — one deliberate glide regardless of distance

function useSmoothAnchorScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const scrollToId = (id) => {
      const el = id === "top" ? document.body : document.getElementById(id);
      if (!el) return;
      const targetY =
        id === "top"
          ? 0
          : el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

      if (reduce) {
        window.scrollTo(0, targetY);
        return;
      }

      const startY = window.pageYOffset;
      const distance = targetY - startY;
      let startTime = null;

      const step = (now) => {
        if (startTime === null) startTime = now;
        const progress = Math.min((now - startTime) / DURATION, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      if (!id) return;
      e.preventDefault();
      scrollToId(id);
      const url =
        id === "top" ? window.location.pathname + window.location.search : `#${id}`;
      history.replaceState(null, "", url);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export default function App() {
  useSmoothAnchorScroll();

  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
