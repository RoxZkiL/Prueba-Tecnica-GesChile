import React from "react";
import video from ".././media/video.mp4";
import image from ".././media/imageDescription.jpg";
import style from "./Description.module.css";

const Description = () => {
  return (
    <section id="description">
      <div className={style.parent}>
        <img className={style.image} src={image} alt="not found" />
        <div className={style.div1}>Hasta 60% reducción de mermas </div>
        <div className={style.div2}>Mas de 62 años en el mercado</div>
        <div className={style.div3}>Hasta 65% de ahorro en HH mensuales</div>
        <div className={style.div4}>Hazlo Fácil</div>
        <div className={style.div5}>
          Mas de 16000 usuarios utilizar nuestro software diariamente a nivel
          mundial
        </div>
        <div className={style.div6}>
          <video className={style.video} width="1000" height="250" controls>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Description;
