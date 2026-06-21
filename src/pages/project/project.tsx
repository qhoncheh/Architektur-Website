import { useState } from "react";
import { Row, Col } from "antd";
import ProjectInfo from "../../components/projects/ProjectInfo";
import ProjectGallery from "../../components/projects/ProjectGallery";
import ProjectNavigation from "../../components/projects/ProjectNavigation";
import { slides } from "../../components/projects/projectsData";

const Project = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full p-8">
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={10}>
          <ProjectInfo project={slide} />
        </Col>

        <Col xs={24} lg={14}>
          <ProjectGallery images={slide.images} />
        </Col>
      </Row>

      <ProjectNavigation onPrev={handlePrev} onNext={handleNext} />
    </div>
  );
};

export default Project;
