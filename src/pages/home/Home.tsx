import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { slides } from "../../components/projects/projectsData";
import "./Home.css";

const heroVideos = ["/video/villa-hero.mp4", "/video/22.mp4"];

const Arrow = () => <span aria-hidden="true" className="arrow-icon">↗</span>;

const Home = () => {
  const { t } = useTranslation();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const playNextHeroVideo = () => {
    setActiveVideoIndex((currentIndex) => (currentIndex + 1) % heroVideos.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal-up").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <section className="hero" aria-label="Featured architecture project">
        <video
          key={heroVideos[activeVideoIndex]}
          className="hero-video"
          src={heroVideos[activeVideoIndex]}
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onEnded={playNextHeroVideo}
          onError={playNextHeroVideo}
        />
        <div className="hero-shade" />
        <div className="hero-topline"><span>INDEPENDENT ARCHITECTURE STUDIO</span><span>MAZANDARAN · IRAN</span></div>
        <div className="hero-copy">
          {/* <p className="eyebrow">SPACES THAT FEEL LIKE SOMETHING</p> */}
          <h1> <br /> <em></em></h1>
          <p className="hero-description">We shape considered spaces for living, gathering and belonging.</p>
          <a className="circle-link" href="#projects" aria-label="Explore selected work"><span>EXPLORE<br />THE WORK</span><Arrow /></a>
        </div>
        <div className="hero-bottomline"><span>01 — 05</span><span>RESIDENTIAL · INTERIORS · OBJECTS</span><a href="#intro">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a></div>
        <div className="hero-index" aria-hidden="true"> </div>
      </section>

      <section className="intro-section section-shell" id="intro">
        <div className="section-kicker reveal-up"><span>01 / OUR APPROACH</span><span>DESIGNING A SENSE OF PLACE</span></div>
        <div className="intro-grid">
          <h2 className="reveal-up">Less, but<br /><em>more meaningful.</em></h2>
          <div className="intro-copy reveal-up">
            <p>We are an independent architecture and interior design studio creating places with a strong sense of identity. Our work begins with listening—to the land, to the light, and to the lives that will unfold within each space.</p>
            <Link to="/about" className="text-link">{t("menu.about")} <Arrow /></Link>
          </div>
        </div>
        <div className="intro-note"><span>THOUGHTFUL BY DESIGN.</span><span>TIMELESS BY NATURE.</span></div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-heading reveal-up"><div><span className="section-label">02 / SELECTED WORK</span><h2>Built around<br /><em>how we live.</em></h2></div><p>A collection of places shaped by light, material and the everyday rituals of life.</p></div>
        <div className="project-grid">
          {slides.map((project, index) => (
            <Link to={`/project/${encodeURIComponent(project.id)}`} className={`project-card project-card-${index + 1} reveal-up`} key={project.id}>
              <div className="project-image-wrap"><img src={project.images[0]} alt={t(project.titleKey)} loading={index === 0 ? "eager" : "lazy"} /><span className="project-open"><Arrow /></span><span className="project-number">0{index + 1}</span></div>
              <div className="project-caption"><div><h3>{t(project.titleKey)}</h3><p>{t(project.subtitleKey)}</p></div><span>{project.location}</span></div>
            </Link>
          ))}
        </div>
        <div className="projects-endnote"><span>SELECTED PROJECTS · 2024—2026</span><span>MADE WITH CARE, FROM THE GROUND UP.</span></div>
      </section>

      <section className="services-section">
        <div className="services-image" />
        <div className="services-content reveal-up"><span className="section-label">03 / WHAT WE DO</span><h2>From first sketch<br />to <em>last detail.</em></h2><p>One studio, a considered process, and a clear point of view at every scale.</p>
          <div className="service-list"><div><span>01</span><span>Architecture</span><span>↗</span></div><div><span>02</span><span>Interior design</span><span>↗</span></div><div><span>03</span><span>Spatial direction</span><span>↗</span></div></div>
        </div>
      </section>

      <section className="contact-cta section-shell reveal-up"><span className="section-label">04 / HAVE A PROJECT IN MIND?</span><h2>Let’s make<br /><em>space for it.</em></h2><Link to="/contact" className="cta-link">TELL US ABOUT IT <Arrow /></Link><div className="cta-orbit" aria-hidden="true">GA</div></section>
    </div>
  );
};

export default Home;
