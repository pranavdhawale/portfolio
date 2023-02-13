import React from "react";

export default function Contact() {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[#7477ff] pb-2">
          Contact Me
        </h2>
        <p>
          I am currently pursuing Diploma in Computer Engineering at Government
          Polytechnic Mumbai(Sandwich Pattern).
          <br />
          Also an Backend Developer Intern at Agarwal Packers and Movers LTD
          (APML)
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> pranavdhawale19@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +91 8369491885
        </p>
      </div>
    </section>
  );
}
