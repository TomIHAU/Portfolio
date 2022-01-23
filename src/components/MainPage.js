import React from "react";
import { Link } from "react-router-dom";

const MainPage = ({ links, handleBackground }) => {
  return (
    <div>
      <article className="intro">
        <h4>Tom Haywood</h4>
        <p>Aspiring Web Developer</p>
        <p>
          Creating elegant{" "}
          <span
            style={{ cursor: "pointer" }}
            id="changeBackground"
            onClick={() => {
              handleBackground();
            }}
          >
            engaging
          </span>{" "}
          web experiences in Melbourne
        </p>
      </article>
      <article className="myLinks">
        {links.map(({ link, title }) => {
          return (
            <Link className="bounce rectangle" to={link}>
              {title}
            </Link>
          );
        })}
      </article>
    </div>
  );
};

export default MainPage;
