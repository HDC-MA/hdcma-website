import "./TrustedTechnologies.css";

function TrustedTechnologies({ darkMode }) {
  const technologies = [
    {
      image: "https://i.pinimg.com/736x/82/40/ac/8240ac872c818d2a39ef20d819fdbf0d.jpg",
      name: "React.js",
    },
    {
      image: "https://i.pinimg.com/736x/f0/a7/aa/f0a7aa555f3deb6b34bd38c65eb421a5.jpg",
      name: "Node.js",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XIT0HJck-o0LeS0EQ7vFy_YHiSgLcPgWJje9aXSPBA&s=10",
      name: "Express.js",
    },
    {
      image: "https://cdn.simpleicons.org/mongodb/47A248",
      name: "MongoDB",
    },
    {
      image: "https://cdn.simpleicons.org/nextdotjs/000000",
      name: "Next.js",
    },
    {
      image: "https://i.pinimg.com/736x/b6/a9/c7/b6a9c7fcfd84ae83641186e75312ade8.jpg",
      name: "Python",
    },
    {
      image: "https://i.pinimg.com/vwebp/1200x/e2/8d/e6/e28de644cf5db33db1d2447bc13aacd3.webp",
      name: "OpenAI",
    },
    {
      image: "https://i.pinimg.com/736x/b6/39/d4/b639d4c554693195bc86709557dcf611.jpg",
      name: "AWS",
    },
    {
      image: "https://i.pinimg.com/1200x/24/03/eb/2403ebf6c1ad61954880517dd5ef718d.jpg",
      name: "Microsoft Azure",
    },
    {
      image: "https://i.pinimg.com/736x/0f/f6/50/0ff65021d914a1ce433917b7f5dc49c6.jpg",
      name: "Docker",
    },
    {
      image: "https://cdn.simpleicons.org/sap/0FAAFF",
      name: "SAP",
    },
    {
      image: "https://i.pinimg.com/736x/09/7b/34/097b349ab1d78c15744c3a89ff457939.jpg",
      name: "MySQL",
    },
    {
      image: "https://i.pinimg.com/736x/dd/bd/aa/ddbdaa71dd2e6bd36ca4f9ff5acc2195.jpg",
      name: "PostgreSQL",
    },
    {
      image: "https://i.pinimg.com/1200x/00/f5/60/00f56056a54874ed3091575c325c3f09.jpg",
      name: "Firebase",
    },
    {
      image: "https://i.pinimg.com/1200x/f1/73/57/f173571d07814e6c135dbaea80043d2b.jpg",
      name: "Git",
    },
    {
      image: "https://i.pinimg.com/vwebp/736x/c7/b8/11/c7b8113247fecd83bd9b5ed5bd3f34d5.webp",
      name: "Linux",
    },
  ];

  return (
    <section className={`tech-section ${darkMode ? "dark" : ""}`}>
      <div className="tech-header">
        <span>TRUSTED TECHNOLOGIES</span>

        <h2>
          Technologies We Use To
          <br />
          Build Modern Digital Solutions
        </h2>

        <p>
          Our engineering team leverages industry-leading
          technologies to deliver secure, scalable and
          enterprise-grade digital solutions.
        </p>
      </div>

      <div className="tech-slider">
        <div className="tech-track">
          {[...technologies, ...technologies].map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">
                <img
                  src={tech.image}
                  alt={tech.name}
                  loading="lazy"
                />
              </div>

              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedTechnologies;