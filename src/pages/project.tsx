import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Image,
} from "antd";
import {
  LeftOutlined,
  RightOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const slides = [
  {
    id: 1,
    title: "Twin Villa, Niavaran",
    subtitle: "Residential – Villa",
    location: "Niavaran St., No. 18, District 1, Tehran",
    landArea: "450 sqm",
    builtArea: "780 sqm",
    designTeam: {
      architect: "Ghazaleh Ataei",
    },
    year: {
      design: "2025",
      completion: "2026",
    },
    text: "The Twin Villa in Niavaran is designed with inspiration from modern and vernacular architecture. Using natural materials and integrating indoor and outdoor spaces, this project offers a unique experience of living within the urban nature.",
    images: [
      "/projects/third/3-asli.jpg",
      "/projects/third/3.jpg",
      "/projects/third/33.jpg",
      "/projects/third/333.jpg",
      "/projects/third/333.jpg",
    ],
  },
  {
    id: 2,
    title: "Zeytoon Residential Complex, Shiraz",
    subtitle: "Residential – Apartment",
    location: "Zeytoon Blvd., Alley 7, Shiraz",
    landArea: "1200 sqm",
    builtArea: "3500 sqm",
    designTeam: {
      architect: "Ghazaleh Ataei",
    },
    year: {
      design: "2024",
      completion: "2026",
    },
    text: "Zeytoon Residential Complex is designed with an approach to open and flexible apartments. Emphasizing natural lighting and vertical gardens, this project enhances the quality of urban living.",
    images: [
      "/projects/second/2.jpg",
      "/projects/second/22.jpg",
      "/projects/second/222.jpg",
      "/projects/second/2222.jpg",
      "/projects/second/2222.jpg",
    ],
  },
  {
    id: 3,
    title: "Duplex Apartment, Elahieh",
    subtitle: "Residential – Renovation",
    location: "Elahieh St., No. 34, Tehran",
    landArea: "200 sqm",
    builtArea: "340 sqm",
    designTeam: {
      architect: "Ghazaleh Ataei",
    },
    year: {
      design: "2025",
      completion: "2025",
    },
    text: "Renovation of the duplex apartment in Elahieh with a minimalist approach and maximum space utilization. Combining neutral colors and luxury materials, this project creates a modern and peaceful atmosphere.",
    images: [
      "/projects/first/0-double living room.jpg",
      "/projects/first/0-living room 01.jpg",
      "/projects/first/0-living room 2.jpg",
      "/projects/first/0-Tv wall.jpg",
      "/projects/first/0-Tv wall.jpg",
    ],
  },
];

const Project = () => {
  const [current, setCurrent] = useState(0);
  const [currentImages, setCurrentImages] = useState(slides[0].images);

  const slide = slides[current];

  useEffect(() => {
    setCurrentImages(slides[current].images);
  }, [current]);

  const changeSlide = (newIndex) => {
    setCurrent(newIndex);
  };

  const swapImages = (index) => {
    if (index === 0) return;

    const newImages = [...currentImages];
    [newImages[0], newImages[index]] = [
      newImages[index],
      newImages[0],
    ];

    setCurrentImages(newImages);
  };

  return (
    <div className="w-full p-8">
      <Row gutter={[24, 24]}>
        {/* Left Column */}
        <Col xs={24} lg={10}>
          <Card
            bordered={false}
            className="h-full !bg-transparent shadow-none"
            styles={{
              body: {
                background: "transparent",
                padding: 24,
              },
            }}
          >
            <div className="text-center mb-6">
              <Title
                level={3}
                style={{
                  color: "#fff",
                  marginBottom: 4,
                }}
              >
                {slide.title}
              </Title>

              <Text style={{ color: "#9ca3af" }}>
                {slide.subtitle}
              </Text>
            </div>

            <Space
              direction="vertical"
              size="middle"
              className="w-full"
            >
              <div>
                <Text strong style={{ color: "#60a5fa" }}>
                  <EnvironmentOutlined /> Location :
                </Text>
                <Text style={{ color: "#d1d5db" }}>
                  {" "}
                  {slide.location}
                </Text>
              </div>

              <div>
                <Text strong style={{ color: "#60a5fa" }}>
                  <HomeOutlined /> Land Area :
                </Text>
                <Text style={{ color: "#d1d5db" }}>
                  {" "}
                  {slide.landArea}
                </Text>
              </div>

              <div>
                <Text strong style={{ color: "#60a5fa" }}>
                  <HomeOutlined /> Total Built Area :
                </Text>
                <Text style={{ color: "#d1d5db" }}>
                  {" "}
                  {slide.builtArea}
                </Text>
              </div>

              <div>
                <Text strong style={{ color: "#60a5fa" }}>
                  <FieldTimeOutlined /> Year :
                </Text>
                <Text style={{ color: "#d1d5db" }}>
                  {" "}
                  Design {slide.year.design} - Completion{" "}
                  {slide.year.completion}
                </Text>
              </div>

              <div>
                <Text strong style={{ color: "#60a5fa" }}>
                  <TeamOutlined /> Design By :
                </Text>
                <Text style={{ color: "#d1d5db" }}>
                  {" "}
                 {slide.designTeam.architect} 
                </Text>

              </div>
            </Space>

            <div className="mt-6 pt-4 border-t border-gray-700">
              <Paragraph style={{ color: "#d1d5db" }}>
                {slide.text}
              </Paragraph>
            </div>
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={24} lg={14}>
          <Card
            bordered={false}
            className="h-full !bg-transparent shadow-none"
            styles={{
              body: {
                background: "transparent",
                padding: 24,
              },
            }}
          >
            {/* Main Image - Click to Open Gallery */}
            <Image.PreviewGroup items={currentImages}>
              <div className="mb-4 h-80 overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={currentImages[0]}
                  alt="main"
                  preview={{
                    mask: null,
                  }}
                  className="w-full h-full object-cover"
                  style={{
                    borderRadius: 8,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </Image.PreviewGroup>

            {/* Thumbnails */}
            <Row gutter={[12, 12]}>
              {currentImages
                .slice(1)
                .map((img, index) => (
                  <Col
                    xs={12}
                    sm={8}
                    md={6}
                    key={index}
                  >
                    <div
                      className="h-24 overflow-hidden rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-300"
                      onClick={() =>
                        swapImages(index + 1)
                      }
                    >
                      <Image
                        src={img}
                        alt={`thumb-${index}`}
                        preview={false}
                        className="w-full h-full object-cover"
                        style={{
                          borderRadius: 8,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </Col>
                ))}
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Button
          onClick={() =>
            changeSlide(
              (current - 1 + slides.length) %
                slides.length
            )
          }
          icon={<LeftOutlined />}
          type="text"
          style={{
            color: "#fff",
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
          className="hover:!bg-white/10"
        >
          Previous
        </Button>

        <Button
          onClick={() =>
            changeSlide(
              (current + 1) % slides.length
            )
          }
          icon={<RightOutlined />}
          iconPosition="end"
          type="text"
          style={{
            color: "#fff",
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
          className="hover:!bg-white/10"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Project;