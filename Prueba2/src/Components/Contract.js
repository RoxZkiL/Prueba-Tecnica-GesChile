import React from "react";
import image from "./media/imageContract.jpg";
import style from "./Contract.module.css";
import { Link } from "react-router-dom";

const Contract = () => {
  return (
    <section id="contract">
      <div className={style.parent}>
        <img className={style.image} src={image} alt="not found" />
        <div className={style.parentdiv}>
          <div className={style.secondDiv}>
            <div className={style.div1}>
              <h2>LICENCIA ANUAL</h2>
            </div>
            <div className={style.div3}>
              <h3 className={style.h3}>30% DCTO</h3>
              <h4 className={style.h4}>Ahora: CLP 24.500</h4>
              <h5 className={style.h5}>Antes: 35.000</h5>
            </div>
            <div className={style.div2}>
              <p>
                Reduccion de mermas proporcional a tamaño del proyecto, Planos
                de insercion detallados, Cotizacion de material sobre detalles
                de plano, Optimizacion de Materiales, Ejecucion y Capacitación
                personalizada, Soporte sobre incidencias.
              </p>
            </div>
            <div className={style.div4}>
              <Link to="/formulario">
                <button className={style.button}>Contrátalo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
