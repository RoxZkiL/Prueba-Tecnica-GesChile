import React from "react";
import image from "./media/imageTestimony.jpg";
import style from "./Testimony.module.css";
import TestimonySlider from "./TestimonySlider";

const Testimony = () => {
  return (
    <section id="testimony">
      <div className={style.body}>
        <img className={style.image} src={image} alt="not found" />
        <div className={style.div1}>
          <p className={style.p}>
            Estos son algunos de los testimonios de nuestros clientes que
            certifican la calidad de nuestro software
          </p>
        </div>
        <div className={style.div2}>
          <TestimonySlider />
        </div>
      </div>
    </section>
  );
};

export default Testimony;
