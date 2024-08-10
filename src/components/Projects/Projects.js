import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spicejet from "../../Assets/Projects/spicejet.png";
import mojoboxx from "../../Assets/Projects/mojoboxx.png";
import enlite from "../../Assets/Projects/enlite.png";
import seo from "../../Assets/Projects/seo.png";
import notice from "../../Assets/Projects/notice.png";
import ife from "../../Assets/Projects/ife.png";
import bookairportcab from "../../Assets/Projects/bookairportcab.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <div className="project-card">
            <ProjectCard
              imgPath={spicejet}
              isBlog={false}
              title="SpiceJet Cabs"
              description="This web-based platform offers a seamless and convenient ground transportation solution for travelers, integrated directly with SpiceJet's ecosystem. It allows users to book cabs for airport pickups and drop-offs, backed by a unique zero-cancellation policy. The platform enhances the user experience with secure, multi-payment gateway integration and partnerships with leading cab providers, reducing the risk of payment failures and cancellations. Built on a robust technology stack featuring JavaScript for the frontend and Node.js for the backend, it ensures reliable performance and a smooth, user-friendly experience."
              demoLink="https://spicejet.bookairportcab.com/"
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={bookairportcab}
              isBlog={false}
              title="Bookairport Cabs"
              description="This project is designed for travelers who cherish exploring new destinations and seeking reliable rental and outstation transportation. The platform offers a secure and user-friendly experience for booking rides, ensuring both safety and convenience for everyday travel and special trips. Built using HTML, CSS, and JavaScript for the frontend, and Node.js with Express.js for the backend, it leverages MySQL for robust data storage. Key features include integration with multiple payment gateways, real-time message delivery, and live chat functionality with drivers, enhancing communication and overall user satisfaction."
              demoLink="https://bookairportcab.com/"
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={mojoboxx}
              isBlog={false}
              title="Mojoboxx Cabs"
              description="This platform offers seamless airport transfers with a variety of cab options, including Economy, Premium, MUV, and SUV, through partnerships with leading cab providers like BLU and MERU. It features integration with multiple payment gateways, ensuring a smooth and flexible payment experience. Built using JavaScript, jQuery, Bootstrap, and CSS3, the platform is fully responsive and optimized for all devices. On the backend, the system is powered by Node.js and Express.js, providing robust API development and secure data management with a strong server connection for reliable performance."
              demoLink="https://mb.bookairportcab.com/website/index.html"
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={ife}
              isBlog={false}
              title="In Flight Entertainment (IFE)"
              description="This web-based project is designed to be integrated into hardware installed in SpiceJet flights. Passengers traveling with SpiceJet can connect their phones or devices to the onboard Wi-Fi, allowing them to access a wide range of entertainment options. These options include games, movies, music, sports, shopping, cab booking, and more, ensuring a pleasant and engaging experience during their flight. The platform is built using cutting-edge technologies such as HTML, CSS, JavaScript, and web APIs, providing a seamless and interactive user experience."
              demoLink="https://spicescreen.com/"
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={enlite}
              isBlog={false}
              title="Enlite"
              description="This project leverages cutting-edge frontend technologies such as React, Redux, Material-UI, and Bootstrap, alongside a robust .NET backend. It integrates AWS services, including S3, EC2, Cognito, and CloudFront, to ensure scalable and secure infrastructure. Google Docs is utilized for dynamic templating, while AI tools like ChatGPT and voice recognition enhance product features and user experience. The platform is divided into several specialized modules, including intake, person management, and security systems, each with its own distinct features and architecture, ensuring a comprehensive and user-friendly solution."
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={seo}
              isBlog={false}
              title="SEO Service for E-Commerce Store"
              description="The SEO Service App, developed using low-code and no-code methods, features custom components for streamlined form creation, including various field types like inputs, dropdowns, and drag-and-drop checkboxes. It also integrates sheet-like tools similar to Excel and Google Docs, allowing users to select preferences tailored to their needs. Designed for eCommerce platforms, the app collects essential information such as Open Graph tags, Meta tags, and blogs, which is then sent to the internal team to efficiently set up the environment, enabling easy product development."
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={notice}
              isBlog={false}
              title="Notice App"
              description="The Notice App is designed to empower online merchants by providing a platform to prominently highlight key points on their online stores. This tool helps merchants promote their products, showcase discounts, offers, sales, policies, and any other important information they wish to display. The app integrates seamlessly with an existing backend panel to allow for easy setup and configuration, including multiple payment gateways such as net banking, Paytm, and others. Developed using React, Redux, and SCSS on the frontend, and powered by Laravel and PHP with MySQL on the backend, the app delivers a reliable and user-friendly experience for both merchants and customers."
            />
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
