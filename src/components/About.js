import React from "react";
const About = ({ linkBack }) => {
  return (
    <>
      {linkBack}
      <h2>About:</h2>
      <section className="aboutText">
        <h3>I'm Tom. </h3>
        <p>
          A recently graduated full stack bootcamp student with Monash, I have
          practical experience with Node.js, Express.js, React.js, RESTful APIs.
          I have also used the databases and their respective ORM's, SQL (and
          sequelize), mongo (and mongoose). I have worked in a team using MVC
          design pattern using agile practices to deliver projects. I have been
          using github for all my work.
        </p>
      </section>
    </>
  );
};

export default About;
