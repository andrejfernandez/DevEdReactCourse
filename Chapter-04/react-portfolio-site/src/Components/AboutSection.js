import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography/videography jobs such as Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Quod debitis ipsa
          mollitia natus impedit, nihil culpa cumque consequatur voluptatum ad
          quas quae maiores odit saepe perspiciatis? Explicabo ipsum beatae non?
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Dude with camera" />
      </div>
    </div>
  );
};

export default AboutSection;
