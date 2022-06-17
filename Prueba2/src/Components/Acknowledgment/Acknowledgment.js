import React from "react";
import style from "./Acknowledgment.module.css";
import image from ".././media/image.png";
import image2 from ".././media/imageFrom.png";
import video from ".././media/video3.mp4";
import AcknowledgmentText from "./AcknowledgmentText";

const Acknowledgment = () => {
  return (
    <div className={style.parent}>
      <img className={style.image} src={image2} alt="not found" />
      <div className={style.div1}>
        <img className={style.image2} src={image} alt="not found" />
      </div>
      <div className={style.div2}>
        <p>Rentabiliza tu negocio de Proyectos de construccion o ensamblado</p>
        <p className={style.p}>
          Nuestro software es de clase mundial el cual permite la creación y
          gestión de presupuesto y planificación de ejecución de manera fácil,
          rápida y segura. Realiza presupuestos de manera rápida, con exactitud
          y seguridad en el manejo de los costos. Reduce las mermas de
          materiales, lo que te permitirá hacer más rentable tu negocio con un
          par de clicks. Software desarrollado con el foco en la usabilidad de
          los usuarios. Capacitaciones contínuas a tu personal.
        </p>
        <video className={style.video} width="700" height="240" controls>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div className={style.div3}>
        <AcknowledgmentText />
      </div>
    </div>
  );
};

export default Acknowledgment;
