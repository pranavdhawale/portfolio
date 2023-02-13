import React from "react";
import HeroImg from "../assets/hero-img.png";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Hero() {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hola Amigos! <br />I am <span className="text-accent">P</span>ranav
            <span className="text-accent"> D</span>hawale
            <br />
            Student | Developer
          </h1>

          <p className="py-5">
            I am proficient in Python, Javascript, ReactJS, TailwindCSS, MongoDB
          </p>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/_pranav_dhawale"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://github.com/pranavdhawale/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="mailto:pranavdhawale19@gmail.com"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineMail size={40} />{" "}
            </a>
            <a
              href="https://www.instagram.com/pranav_dhawale_19/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-[#7477ff] text-black border-6 px-6 py-3 hover:bg-white"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
