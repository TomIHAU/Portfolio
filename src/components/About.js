import React from "react";
const About = ({ linkBack }) => {
  return (
    <>
      {linkBack}
      <h2>About:</h2>
      <section className="aboutText">
        <h3>I'm Tom. </h3>
        <p>
          {/* A recently graduated full stack bootcamp student with Monash, I have
          practical experience with Node.js, Express.js, React.js, RESTful APIs.
          I have also used the databases and their respective ORM's, SQL (and
          sequelize), mongo (and mongoose). I have worked in a team using MVC
          design pattern using agile practices to deliver projects. I have been
          using github for all my work. */}
          Full-stack web developer with a background in high pressure, time-poor
          industries. Those jobs have taught me to be time-focused, organized
          and maintain a high attention to detail. At a restaurant I worked at
          we achieved a one hat rating, through teamwork, consistency and
          persistence. Recently earned a certificate in full stack development
          from Monash, with newly developed skills in JS, React.js, Node.js,
          responsive CSS design and SQL and mongo (and their ORM's). With each
          project, my goal is to effectively engage the user's attention for a
          more impactful user experience. During recent projects, I worked with
          a team and drove to apply agile development practices. I am confident
          that my technical skills combined with drive to succeed will allow me
          to add value to any team.
        </p>
      </section>
    </>
  );
};

export default About;
