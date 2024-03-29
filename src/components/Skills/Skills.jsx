import React from "react";
import style from "./skills.module.css";

function Skills() {
  return (
    <div className={style.skillsbody}>
      <div>
        <h1>Skills & Interests</h1>
      </div>
      <div className={style.allicons}>
        <div>
          <img src="/skills/html.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>HTML</div>
        </div>
        <div>
          <img src="/skills/css.svg" alt="css" />
          <div style={{ fontWeight: "300" }}>CSS</div>
        </div>
        <div>
          <img src="/skills/javascript.svg" alt="js" />
          <div style={{ fontWeight: "300" }}>Javascript</div>
        </div>
        <div>
          <img src="/skills/vue.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>VueJs</div>
        </div>
        <div>
          <img src="/skills/nuxt.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>NuxtJs</div>
        </div>
        <div>
          <img src="/skills/tailwind.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>Tailwind</div>
        </div>
        <div>
          <img src="/skills/react.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>React</div>
        </div>
        <div>
          <img src="/skills/redux.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>Redux</div>
        </div>
        <div>
          <img src="/skills/algorithm.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>Algorithms</div>
        </div>
        <div>
          <img src="/skills/bootstrap.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>Bootstrap</div>
        </div>
        <div>
          <img src="/skills/github.svg" alt="html" />
          <div style={{ fontWeight: "300" }}>Github</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
