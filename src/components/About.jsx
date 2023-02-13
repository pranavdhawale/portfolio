import React from "react";
import AboutImg from "../assets/about-img.png";

export default function About() {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#7477ff] pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Pranav Dhawale everyone calls me Noddy. I am a
            Student & Developer. I build optimized and powerful APIs using
            NodeJS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like ReactJS, Axios, Tailwind
            CSS, and many more.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I explore new technologies and try to implement
            them in my projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
