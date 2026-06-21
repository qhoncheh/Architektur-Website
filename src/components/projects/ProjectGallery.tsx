import { useState } from "react";
import { Card, Row, Col, Image } from "antd";

interface ProjectGalleryProps {
  images: string[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Card
      bordered={false}
      style={{
        background: "transparent",
        boxShadow: "none",
      }}
      styles={{
        body: {
          background: "transparent",
          padding: 0,
        },
      }}
    >
      <Image.PreviewGroup items={images}>
        <div className="mb-4 h-[410px] overflow-hidden rounded-lg">
          <Image
            src={images[activeIndex]}
            preview={{ mask: null }}
            className="w-full h-full object-cover"
          />
        </div>
      </Image.PreviewGroup>

      <Row gutter={[12, 12]}>
        {images.map((img, index) => {
          if (index === activeIndex) return null;

          return (
            <Col key={`${img}-${index}`} xs={12} sm={8} md={6}>
              <div
                className="h-24 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={img}
                  preview={false}
                  className="w-full h-full object-cover"
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default ProjectGallery;
