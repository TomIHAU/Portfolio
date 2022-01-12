import React, { useState } from "react";
import { myWork } from "./workArray";
import { DiAptana } from "react-icons/di";
import { Link } from "react-router-dom";

const Work = ({ linkBack }) => {
  const [workDisplay, setWorkDisplay] = useState();

  const handleWorkDisplay = (event) => {
    event === workDisplay ? setWorkDisplay(undefined) : setWorkDisplay(event);
  };

  return (
    <>
      {linkBack}
      <h2>My Work:</h2>
      <div className="workTitles">
        {myWork.map(({ title }, index) => {
          return (
            <h3
              key={index}
              onClick={() => {
                handleWorkDisplay(index);
              }}
            >
              {title}
            </h3>
          );
        })}
      </div>
      {workDisplay ? (
        <section class="projectCards">
          <a
            href={myWork[workDisplay].href}
            target="_blank"
            className="card"
            rel="noreferrer"
          >
            <img
              className="image"
              src={myWork[workDisplay].src}
              alt={myWork[workDisplay].alt}
            />

            <div className="overlay">
              <div className="hoverText">{myWork[workDisplay].hoverText}</div>
            </div>
          </a>
        </section>
      ) : (
        ""
      )}
      <Link className="secret" to="/whatisthisplace">
        <DiAptana />
      </Link>
    </>
  );
};

export default Work;
