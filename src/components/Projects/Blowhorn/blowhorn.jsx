import React, { useEffect, useState } from "react";
import style from "./blowhorn.module.css";

import img1 from "./signup.png";
import img2 from "./location.png";
import img3 from "./user_management.png";
import img4 from "./user2.png";
import img5 from "./qc.png";
import img6 from "./grn.png";
import img7 from "./profile.png";
import left from "./left.gif";
import right from "./right.gif";

const Blowhorn = () => {
  const [current, setCurrent] = useState(0);
  const SliderData = [
    {
      id: 0,
      image: img1,
    },
    {
      id: 1,
      image: img2,
    },
    {
      id: 2,
      image: img3,
    },
    {
      id: 3,
      image: img4,
    },
    {
      id: 4,
      image: img5,
    },
    {
      id: 5,
      image: img6,
    },
    {
      id: 6,
      image: img7,
    },
  ];

  // useEffect(() => {
  //   setInterval(() => {
  //    setCurrent(prev=>prev+1)
  //   },1000)
  // },[])

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(SliderData) || SliderData.length <= 0) {
  //   return null;
  // }

  return (
    <div className={style.project1body}>
      <div className={style.slider}>
        <img src={left} className={style.left_arrow} onClick={prevSlide} />
        <img src={right} className={style.right_arrow} onClick={nextSlide} />
        {SliderData.map((slide) => {
          return (
            slide.id == current && (
              <div className={style.imageediv} key={slide.id}>
                <img className={style.proimg} src={slide.image} alt="img"></img>
              </div>
            )
          );
        })}
      </div>

      <div className={style.procontentdiv}>
        <h2
          style={{
            textAlign: "center",

            fontWeight: "bolder",
          }}
        >
          Blowhorn Website
        </h2>
        <p>
          Blowhorn is logistics company solving the toughest problems for
          customers. It provides innovative logistics solutions for a wide
          variety of customers, ranging from large e-commerce (Amazon, Nykaa,
          Unicommerce, Shopify, etc) companies to small convenience stores and
          even individuals.
        </p>

        <h3 style={{ color: "#B37D4E" }}>Tech stack:</h3>
        <p>NUXTJS | TAILWIND | JAVASCRIPT | PRIME VUE </p>

        <div className={style.btndivv}>
          <button
            className={style.btnpro}
            style={{ backgroundColor: "#286DAB" }}
          >
            <a
              href="https://blowhorn.com/"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <span>
                <svg
                  style={{
                    color: "white",
                    marginTop: "5px",
                    position: "absolute",
                    left: "10",
                    bottom: "6",
                  }}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1.1em"
                  width="1.1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
                  <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
                </svg>
              </span>
              Live
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blowhorn;
