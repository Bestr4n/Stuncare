import React from "react";
import { Link } from "react-scroll";
import img from "../assets/About/TentangKami2.png";
import Header1 from "../assets/About/TentangKami1.png";
import Section from "../assets/About/TentangKami3.png";
import Section1 from "../assets/About/Section.png";
import { NavLink } from "react-router-dom";

const Button = ({ title }) => (
  <div>
    <NavLink
      to="/contact"
      spy={true}
      smooth={true}
      duration={500}
      className="bg-white py-2 px-5 rounded-lg mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-purple-500 hover:text-white transition-all"
      as="button"
    >
      {title}
    </NavLink>
  </div>
);

const About = () => (
  <>
    <div className="hero">
      <img src={Header1} alt="" />
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={img}
                alt="img"
                className="mx-auto md:ml-auto md:mr-0"
                style={{ maxWidth: "100%", height: "auto" }}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1200"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1200"
            >
              <h2 className="text-4xl font-semibold leading-tight mb-5">
                Kenapa memilih <br />
                Stuncare?
              </h2>
              <p className="text-lightText mt-5 mb-10">
                Stuncare adalah solusi inovatif yang dirancang untuk mengatasi
                permasalahan gizi dengan cepat dan efisien. Kami memahami betapa
                pentingnya kesehatan Anda, itulah sebabnya Stuncare hadir untuk
                memberikan kemudahan dalam mengelola gizi Anda sehari-hari.{" "}
                <br />
                Dengan Stuncare, Anda dapat dengan mudah memantau asupan nutrisi
                Anda serta mengatasi permasalahan gizi secara tepat waktu. Kami
                mengintegrasikan teknologi terkini dengan kemudahan penggunaan
                untuk memastikan pengalaman yang lancar dan hasil yang optimal
                dalam pengelolaan gizi Anda. Stuncare, solusi praktis untuk
                menjaga kesehatan Anda dengan mudah dan efisien.
              </p>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                <Button title="Pelajari lebih lanjut" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <img src={Section} alt="" />
      <img
        src={Section1}
        alt=""
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1200"
      />
    </div>
  </>
);

export default About;
