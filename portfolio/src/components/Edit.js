import React from "react";

const Edit = ({ linkBack, handleBackground, part }) => {
  return (
    <div>
      {linkBack}
      <article className="intro">
        <h4>Tom H</h4>
        <p>Aspiring Web Developer</p>
        <p>
          Creating elegant engaging web experiences in <span>Melbourne</span>
        </p>
      </article>
      <article className="myLinks"></article>
    </div>
  );
};

export default Edit;
