import React, { useState } from "react";
import { myWork } from "./workArray";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

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
          <div className="card">
            <img
              className="image"
              src={myWork[workDisplay].src}
              alt={myWork[workDisplay].alt}
            />

            <div className="overlay">
              <a
                href={myWork[workDisplay].deployed}
                target="_blank"
                rel="noreferrer"
              >
                {myWork[workDisplay].deployTitle}
              </a>
              <a
                href={myWork[workDisplay].github}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              {/* <div className="hoverText">{myWork[workDisplay].hoverText}</div> */}
            </div>
          </div>
          <div class="projectInfo">
            <p>{myWork[workDisplay].info}</p>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Work;
