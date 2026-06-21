const AboutImage = () => {
  const photoUrl = '/112.png';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <img
        src={photoUrl}
        alt="About image"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        style={{
          width: '80%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
    </div>
  );
};

export default AboutImage;