import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
    <div className="container skills my-3" id="skills">
      <h1>PROJECT</h1>
      <div className="items p-3">
        {project.map((data) => (
          <>
            <div
              className="text-center item"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img
                src={`/assets/${data.imageSrc}`}
                alt=""
                style={{ width: "70px", height: "70px" }}
              />
              <h4>{data.title}</h4>
              <a
                    href={data.source}
                    className="btn btn-primary mx-3"
                    target="_blank"
                  >
                    occultstudios
                  </a>

            </div>
          </>
        ))}
      </div>
    </div>
  </>
  );
};

export default Projects;
