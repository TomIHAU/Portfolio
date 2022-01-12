import React from "react";
const About = ({ linkBack }) => {
  return (
    <>
      {linkBack}
      <h2>About:</h2>
      <section className="text">
        <h3>I'm Tom. </h3>
        <p>
          A recently graduated full stack bootcamp student. Still learning on
          how to do this. But watch this space. Things I'm currently good at JS,
          React.js, Node.js, responsive CSS design and SQL and mongo (and their
          ORM's).
        </p>
      </section>
    </>
  );
};

export default About;
