import React from "react";

const Contact = ({ linkBack }) => {
  return (
    <>
      {linkBack}
      <h2>Contact:</h2>

      <section className="contactText">
        <a
          href="mailto: thaywood988@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
        <a href="https://github.com/TomIHAU" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/tom-haywood-a78751228/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/15r4hjuRoujY32ugh5j1RGBmvwY_hHMT2h0ddh4HXKUc/view?usp=sharing"
          download
        >
          Resume
        </a>
      </section>
    </>
  );
};

export default Contact;
