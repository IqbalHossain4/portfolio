import React from "react";
import myPhoto from "../../assets/image.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="containers">
        <div className="w-full h-full md:flex items-center justify-center gap-16">
          <div className="w-[250px] h-[220px] borderShap overflow-hidden">
            <img src={myPhoto} alt="" />
          </div>
          <div className="text-white">
            <h1 className="lg:font-extrabold lg:text-6xl">Iqbal Hossain</h1>
            <div className="my-6">
              <p>I am a MERN stack Developer</p>
              <p className="mt-2">
                First, solve the problem. Then, write the code.
              </p>
            </div>
            <div className="text-white flex items-center gap-4 text-[18px] mt-4">
              <span>
                <a href="https://web.facebook.com/ayaniqbalbd/" target="blank">
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/iqbal-hossain10/"
                  target="blank"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/ayaniqbal04" target="blank">
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/ayana.iqbal/" target="blank">
                  <FaInstagram />
                </a>
              </span>
              <span>
                <a href="https://github.com/IqbalHossain4" target="blank">
                  <FaGithub />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
