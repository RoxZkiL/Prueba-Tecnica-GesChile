import React from "react";
import style from "./Header.module.css";
import image from "./media/imageCover.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.cover}>
      <img className={style.image} src={image} alt="not found" />
      <h2>Rentabiliza tu Negocio de Proyectos de Construcción o Ensamblado</h2>
      <p>
        Nuestro software es de clase mundial el cual permite la creación y
        gestión de presupuesto y planificación de ejecución de manera fácil,
        rápida y segura.
      </p>
      <Link to="/formulario">
        <button className={style.button}>SOLICITAR</button>
      </Link>
    </div>
  );
};
