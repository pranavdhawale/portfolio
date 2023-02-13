import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "CloudEncrx",
      desc: " A encrypted cloud drive",
      code: "https://github.com/pranavdhawale/cloudencrx-backend",
    },
    {
      title: "Inplant Portal",
      desc: "A web portal for student database management",
      code: "https://github.com/Inplant-Training-Portal",
    },
    {
      title: "Alpha Blogs",
      desc: "A public blog site like dev.to",
      code: "https://github.com/pranavdhawale/public-blog-site",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#7477ff] pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              {/* <img src={project.img} alt={project.title} /> */}
              <a href={project.code}>
                <p>{project.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
