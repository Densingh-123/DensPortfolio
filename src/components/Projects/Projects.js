import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
imgPath='/1.png'

  isBlog={false}
  title="Food Hub"
  description="A vibrant Food Ordering Platform where users can browse various cuisines, place orders, and track their food delivery in real time. Built with React.js, Material-UI, and Firebase. Features include a dynamic menu, user-friendly interface, and secure payment options."
  ghLink="https://github.com/Densingh-123/Restaurent-Application.git"
  demoLink="https://restaurent-application-ten.vercel.app/"
/>

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
imgPath='/2.png'
  isBlog={false}
  title="JuicyApp"
  description="A refreshing Juice Ordering App designed for juice enthusiasts. Features include a vibrant menu of juices, customizable orders, secure checkout processes, integrated payment gateways, and real-time order tracking for a seamless experience."
  ghLink="https://github.com/Densingh-123/Fanta_Juice_Application.git"
  demoLink="https://fanta-juice-application.vercel.app/"
/>

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
          imgPath='/3.png'
   isBlog={false}
  title="Shopsy"
  description="An intuitive Online Shopping App that offers a seamless shopping experience. Users can explore a wide range of products, apply filters for easy search, add items to their cart or wishlist, and enjoy secure payment options. The app also includes features like order tracking, product reviews, and personalized recommendations to enhance the user experience."
  ghLink="https://github.com/Densingh-123/OnlineShopping_Application.git"
  demoLink="https://online-shopping-application-gamma.vercel.app/cart"
/>

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
  imgPath='/4.png'
  isBlog={false}
  title="Shopping Application"
  description="An engaging Shopping Application offering users a convenient platform to explore and purchase products online. Shopsy provides features such as product search and filters, a user-friendly cart system, secure payment gateways, and real-time order tracking. The app is designed with an intuitive interface, ensuring a seamless shopping experience for users."
  ghLink="https://github.com/Densingh-123/Shopsy.git"
  demoLink="https://shopsy-lovat.vercel.app/"
/>

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
           imgPath='/5.png'
   isBlog={false}
  title="ShopEasy"
  description="A comprehensive Shopping Application designed to simplify online shopping. Users can browse a wide variety of products, add items to their wishlist or cart, and make secure purchases. The app includes features like product filtering, personalized recommendations, order tracking, and customer reviews to enhance the shopping experience. Designed with a modern and intuitive interface, it caters to all shopping needs in a single platform."
  ghLink="https://github.com/Densingh-123/Furniture_Shop.git"
  demoLink="https://furniture-shop-chi.vercel.app/"
/>

          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
  imgPath='/7.png'
  isBlog={false}
  title="Quiz Application"
  description="An interactive Quiz Application designed to make learning fun and engaging. Users can participate in quizzes across various topics and difficulty levels. The app features timed quizzes, instant feedback, and performance tracking. Additional functionalities include leaderboard rankings, customizable quiz settings, and the ability to create and share quizzes with others. With a user-friendly interface, the application caters to both casual learners and competitive users."
  ghLink="https://github.com/Densingh-123/Quiz_Application.git"
  demoLink="https://quiz-applications-tau.vercel.app/"
/>
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath='/8.png'
    isBlog={false}
    title="Gym Application"
    description="A comprehensive Gym Application designed to help users manage their fitness journey. The app features personalized workout plans, progress tracking, exercise tutorials, and diet recommendations. Users can log their daily workouts, track calories burned, and monitor improvements over time. With a user-friendly interface, it also offers features such as goal setting, reminders for workouts, and community interaction to keep users motivated."
    ghLink="https://github.com/Densingh-123/Gym-Application.git"
    demoLink="https://gym-application-alpha.vercel.app/"
  />
</Col>

          <Col md={4} className="project-card">
          <ProjectCard
  imgPath='/6.png'
  isBlog={false}
  title="Flipkart Application"
  description="A versatile E-commerce platform modeled after Flipkart, providing users with a seamless shopping experience. This application offers a wide range of products across multiple categories such as electronics, fashion, home appliances, and more. Key features include advanced search and filters, personalized product recommendations, secure payment gateways, order tracking, and customer reviews. Additionally, the app integrates exclusive deals, flash sales, and a loyalty rewards program to enhance user engagement."
  ghLink="https://github.com/Densingh-123/Flipkart_Application.git"
  demoLink="https://flipkart-application.vercel.app/"
/>

          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
  imgPath='/9.png'
  isBlog={false}
  title="Portfolio"
  description="A dynamic Portfolio Application showcasing professional achievements, skills, and projects. The portfolio highlights completed works, case studies, and expertise in technologies like React, JavaScript, and more. Key sections include an About Me page, a Projects gallery, a Blog section for sharing insights, and a Contact form for collaboration opportunities. Designed with a clean, responsive interface, it offers visitors a seamless browsing experience across devices."
  ghLink="https://github.com/Densingh-123/Densingh-Portfolio.git"
  demoLink="https://densingh-portfolio-55u8.vercel.app/"
/>


          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
