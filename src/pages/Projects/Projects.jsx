import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [controleProjects, setControleProjects] = useState(true);
  let [project, setProject] = useState("");

  // fetch data
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        if (controleProjects) {
          setProjects(data.slice(0, 6));
        } else {
          setProjects(data);
        }
      });
  }, []);

  // handle Modal

  const handleProjects = (id) => {
    setProject(projects.find((item) => item.no === id));
    if (project) {
      window.my_modal_3.showModal();
    }
  };

  return (
    <div className="py-24">
      <div className="containers">
        <div className="w-full text-left">
          <button className="py-1 px-2 bg-[#3B3C40]  text-[#959595]">
            Projects
          </button>
          <h2 className="font-[800] text-white mt-4">Creative Projects</h2>
        </div>
        <div className="grid-2 gap-16 mt-16">
          {projects.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => handleProjects(item.no)}
                className="w-full h-[300px] projectBox"
              >
                <img
                  src={item.photo}
                  className="w-full h-full object-fill saturate-0"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-24">
            <button
              onClick={() => setControleProjects(false)}
              className={`py-3 px-8 mt-8 bg-white font-[500] text-black `}
            >
              View More
            </button>
          </div>
        )}

        {project && (
          <dialog id="my_modal_3" className="modal ">
            <form method="dialog" className="modal-box px-4 bg-[#3B3C40] ">
              <button className="btn btn-sm btn-circle  absolute right-2 top-2">
                ✕
              </button>
              <div className="w-full h-[350px]">
                <img src={project.photo} className="w-full h-full" alt="" />
              </div>

              <h3 className="font-[600] text-[18px] text-white mt-8 my-4">
                {project.name}
              </h3>
              <p className=" text-[#bbb] text-[14px] loading-8 ">
                {project.type}
              </p>
              <h4 className="my-4 text-[18px] text-white font-[600]">
                Important Link
              </h4>
              <p className=" text-[#bbb] text-[14px] loading-8 ">
                <a href={project.live} target="blank">
                  Live Link
                </a>
              </p>
              <hr className="my-4" />
              <p className=" text-[#bbb] text-[14px] loading-8 ">
                <a href={project.frontend} target="blank">
                  Front-End Link
                </a>
              </p>
              <hr className="my-4" />
              <p className=" text-[#bbb] text-[14px] loading-8 ">
                <a href={project.backend} target="blank">
                  Back-End Link
                </a>
              </p>
            </form>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default Projects;
