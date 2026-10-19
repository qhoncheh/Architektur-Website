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
      <section className="hero" aria-label={t("home.heroLabel")}>
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
        <div className="hero-topline"><span>{t("home.studio")}</span><span>{t("home.location")}</span></div>
        <div className="hero-copy">
          <p className="hero-description">{t("home.description")}</p>
          <a className="circle-link" href="#projects" aria-label={t("home.exploreLabel")}><span>{t("home.explore")}</span><Arrow /></a>
        </div>
        <div className="hero-bottomline"><span>01 — 05</span><span>{t("home.category")}</span><a href="#intro">{t("home.scroll")} <span aria-hidden="true">↓</span></a></div>
        <div className="hero-index" aria-hidden="true"> </div>
      </section>

      <section className="intro-section section-shell" id="intro">
        <div className="section-kicker reveal-up"><span>{t("home.approach")}</span><span>{t("home.approachTitle")}</span></div>
        <div className="intro-grid">
          <h2 className="reveal-up">{t("home.introTitle").split("|")[0]}<br /><em>{t("home.introTitle").split("|")[1]}</em></h2>
          <div className="intro-copy reveal-up">
            <p>{t("home.introText")}</p>
            <Link to="/about" className="text-link">{t("menu.about")} <Arrow /></Link>
          </div>
        </div>
        <div className="intro-note"><span>{t("home.noteOne")}</span><span>{t("home.noteTwo")}</span></div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-heading reveal-up"><div><span className="section-label">{t("home.selected")}</span><h2>{t("home.selectedTitle").split("|")[0]}<br /><em>{t("home.selectedTitle").split("|")[1]}</em></h2></div><p>{t("home.selectedText")}</p></div>
        <div className="project-grid">
          {slides.map((project, index) => (
            <Link to={`/project/${encodeURIComponent(project.id)}`} className={`project-card project-card-${index + 1} reveal-up`} key={project.id}>
              <div className="project-image-wrap"><img src={project.images[0]} alt={t(project.titleKey)} loading={index === 0 ? "eager" : "lazy"} /><span className="project-open"><Arrow /></span><span className="project-number">0{index + 1}</span></div>
              <div className="project-caption"><div><h3>{t(project.titleKey)}</h3><p>{t(project.subtitleKey)}</p></div><span>{t(`project.${project.translationKey}.location`)}</span></div>
            </Link>
          ))}
        </div>
        <div className="projects-endnote"><span>{t("home.projectsNote")}</span><span>{t("home.projectsEnd")}</span></div>
      </section>

      <section className="services-section">
        <div className="services-image" />
        <div className="services-content reveal-up"><span className="section-label">{t("home.services")}</span><h2>{t("home.servicesTitle").split("|")[0]}<br /><em>{t("home.servicesTitle").split("|")[1]}</em></h2><p>{t("home.servicesText")}</p>
          <div className="service-list"><div><span>01</span><span>{t("home.serviceArchitecture")}</span><span>↗</span></div><div><span>02</span><span>{t("home.serviceInterior")}</span><span>↗</span></div><div><span>03</span><span>{t("home.serviceSpatial")}</span><span>↗</span></div></div>
        </div>
      </section>

      {/* <section className="contact-cta section-shell reveal-up"><span className="section-label">04 / HAVE A PROJECT IN MIND?</span><h2>Let’s make<br /><em>space for it.</em></h2><Link to="/contact" className="cta-link">TELL US ABOUT IT <Arrow /></Link><div className="cta-orbit" aria-hidden="true">GA</div></section> */}
    </div>
  );
};

export default Home;
