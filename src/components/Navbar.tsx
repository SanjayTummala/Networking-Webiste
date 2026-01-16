import React, { useEffect, useRef } from "react";

const sections = [
  "home",
  "whatido",
  "about",
  "skills",
  "projects",
  "labs",
  "contact",
];

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const moveIndicator = (el: HTMLElement) => {
    if (!navRef.current || !indicatorRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();

    indicatorRef.current.style.width = `${linkRect.width}px`;
    indicatorRef.current.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
  };

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-link")
    );

    const activateLink = (link: HTMLAnchorElement) => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      moveIndicator(link);
    };

    // Click handling
    links.forEach(link => {
      link.addEventListener("click", () => activateLink(link));
    });

    // Scroll sync
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = "home";

      sections.forEach(id => {
        const divider = document.getElementById(id);
        if (!divider) return;

        const top = divider.getBoundingClientRect().top + window.scrollY;
        if (scrollPos >= top) current = id;
      });

      const active = document.querySelector<HTMLAnchorElement>(
        `.nav-link[href="#${current}"]`
      );

      if (active) activateLink(active);
    };

    window.addEventListener("scroll", onScroll);

    // Initial state
    const initial = document.querySelector<HTMLAnchorElement>(".nav-link.active");
    if (initial) moveIndicator(initial);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-indicator" ref={indicatorRef} />

      <div className="nav-links">
        <a href="#home" className="nav-link active">Home</a>
        <a href="#whatido" className="nav-link">What I Do</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#labs" className="nav-link">Labs</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
