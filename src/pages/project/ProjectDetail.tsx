import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import ProjectGallery from "../../components/projects/ProjectGallery";
import ProjectInfo from "../../components/projects/ProjectInfo";
import { slides } from "../../components/projects/projectsData";

const ProjectDetail = () => {
  const { id = "" } = useParams();
  const { t } = useTranslation();
  const project = slides.find((slide) => slide.id === decodeURIComponent(id)) ?? slides[0];

  return (
    <main className="project-detail-page">
      <div className="project-detail-heading">
        <Link to="/#projects" className="text-link">← {t("menu.projects")}</Link>
        <span>SELECTED PROJECT · {String(slides.indexOf(project) + 1).padStart(2, "0")}</span>
      </div>
      <div className="project-detail-grid">
        <ProjectInfo project={project} />
        <ProjectGallery images={project.images} />
      </div>
    </main>
  );
};

export default ProjectDetail;
