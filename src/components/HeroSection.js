import React from "react";
import { useState } from "react";
import Image1 from "../assets/hero-img1.webp";
import Image2 from "../assets/hero-img2.webp";
import { motion, AnimatePresence } from "framer-motion";
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flowDirection, setflowDirection] = useState(true);

  const showContent = [
    {
      title: "Ghum Hai Kisikey Pyaar Meiin",
      subTitle: "StarPlus",
      about:
        "Retreating from tragedy, Virat ties the knot with Pakhi to initiate new beginnings. Years later, when Sai returns, he is forced to question his choices.",
      image: Image1,
    },
    {
      title: "3rd Stanza",
      subTitle: "Hindi",
      about:
        "Tale of a poetic romance! Sparks fly between two strangers- a poet and a lifestyle blogger- after they meet at a cafe. ",
      image: Image2,
    },
    {
      title: "Yeh Rishta Kya kehlata hai",
      subTitle: "Hindi",
      about:
        "After naina agrees to take part in rishi's plan lets see what both of them do next, will naina face consequence or they will be the winners ",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d",
    },
    {
      title: "Prince",
      subTitle: "English,comedy",
      about:
        "Hilarious film with two characters who will win your heart, a binged worthy movie that you should watch on your weekend",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2203/1422203-h-5970d2180871",
    },
    {
      title: "MS Dhoni :The untold Story",
      subTitle: "Hindi ,Inspirational",
      about:
        "A tell-all tale about the life and times of Indian cricketer Mahendra Singh Dhoni, mapping his journey from a ticket collector to a celebrated sportsman.",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9225/1389225-h-d564666bc1d5",
    },
  ];

  const prevContent = () => {
    if (currentIndex === 0) {
      setCurrentIndex(showContent.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
    setflowDirection(false);
  };
  const nextContent = () => {
    if (currentIndex === showContent.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
    setflowDirection(true);
  };
  return (
    <div className="hero-section-wrapper">
      <div className="inner-wrapper">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: flowDirection ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: flowDirection ? -100 : 100 }}
            transition={{
              duration: 0.2,
            }}
            className="show-content"
          >
            <div className="description">
              <h1 className="title">{showContent[currentIndex].title}</h1>
              <h3 className="subtitle">
                {" "}
                {showContent[currentIndex].subTitle}
              </h3>
              <p className="about">{showContent[currentIndex].about}</p>
            </div>
            <div className="media">
              <div className="gradient-filler"> </div>
              <img
                src={showContent[currentIndex].image}
                alt="hero-section-banners"
              />
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="prev-next-buttons">
          <button className="prev" onClick={prevContent}>
            {" "}
            <i style={{ fontSize: "2rem" }} className="fa">
              &#xf053;
            </i>
          </button>
          <button className="next" onClick={nextContent}>
            <i style={{ fontSize: "2rem" }} className="fa">
              &#xf054;
            </i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
