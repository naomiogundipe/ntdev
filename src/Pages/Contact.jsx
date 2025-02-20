import React from "react";
import Header from "../Components/Header";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <Header />
      <div className=" w-full h-[90vh]  flex flex-col items-center justify-center text-white z-0">
        <div className="sm:w-3/4 xl:h-3/4 shadow-md shadow-gray-500 rounded-xl xl:relative flex flex-col xl:block  h-full mt-10 xl:mt-0">
          <div className="xl:absolute xl:w-1/4 h-full  right-0 bg-[#111a3b] rounded-t-xl  xl:rounded-tr-xl xl:rounded-tl-none  xl:rounded-br-xl  border-gray-500 border-l-2 flex items-center flex-col p-5 justify-around gap-3 xl:gap-0">
            <p className="text-3xl font-bold">Naomi Ogundipe</p>
            <p className="xl:text-justify text-lg text-center">
              Got a project idea? I'm just a call away! Feel free to reach out
              ___. I'd love to connect and bring your vision to life.
            </p>
            <div className="flex xl:flex-col gap-8">
              <div className="flex gap-3 items-center text-lg group">
                <a href="tel:+2347019436201">
                  <FaPhone className="group-hover:scale-[1.3]" />
                </a>
                <a
                  href="tel:+2347019436201"
                  className="group relative hidden lg:block"
                >
                  +2347019436201{" "}
                  <span className="absolute w-0 bg-white h-0.5 left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="flex gap-3 items-center text-lg group">
                <a href="mailto:ntdogundipe@gmail.com">
                  <FaEnvelope className="group-hover:scale-[1.3]" />
                </a>
                <a
                  href="mailto:ntdogundipe@gmail.com"
                  className="group relative  hidden lg:block "
                >
                  ntdogundipe@gmail.com{" "}
                  <span className="absolute w-0 bg-white h-0.5 left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="flex gap-3 items-center text-lg group">
                <a href="#"><FaGithub className="group-hover:scale-[1.3]" /></a>
                <a href="#" className="group relative hidden lg:block">
                  naomiogundipe
                  <span className="absolute w-0 bg-white h-0.5 left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>

              <div className="flex gap-3 items-center text-lg group">
                <a href="#"><FaLinkedin className="group-hover:scale-[1.3]" /></a>
                <a href="#" className="group relative hidden lg:block">
                  Naomi Ogundipe
                  <span className="absolute w-0 bg-white h-0.5 left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </div>
          <div className=" xl:w-3/4 h-full flex flex-col gap-6 bg-gray-200 text-black p-5  rounded-tl-xl rounded-bl-xl ">
            <div className="w-full">
              <p className="text-[#111a3b] text-2xl font-bold">
                Let's Connect!
              </p>
              <p>
                Have a question or looking to collaborate? Feel free to reach
                out__
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <div className="xl:flex-col flex xl:gap-2 justify-between gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <label className=" text-gray-600">Fullname</label>
                  <input
                    type="text"
                    className="bg-[#111a3bcc] w-full block px-4 py-2 shadow-sm  shadow-gray-700 rounded-lg outline-0"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className=" text-gray-600">Email</label>
                  <input
                    type="text"
                    className="bg-[#111a3bcc] w-full block px-4 py-2 shadow-sm  shadow-gray-700 rounded-lg outline-0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className=" text-gray-600">
                  Please enter details of your request
                </label>
                <textarea
                  rows={6}
                  className="bg-[#111a3bcc] w-full block px-4 py-2 shadow-sm  shadow-gray-700 rounded-lg outline-0"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-[#111a3b] text-white py-2 px-8 rounded-lg shadow-md shadow-black hover:scale-[1.1] font-semibold uppercase">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
