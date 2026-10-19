const AboutImage = () => {
  const photoUrl = "/112.png";

  return (
    <figure className="about-image" data-aos="fade-up" data-aos-delay="150">
      <img
        src={photoUrl}
        alt="Architecture studio portrait"
      />
      <figcaption><span>GHAZALEH ATAEI</span><span>ARCHITECTURE & INTERIORS</span></figcaption>
    </figure>
  );
};

export default AboutImage;