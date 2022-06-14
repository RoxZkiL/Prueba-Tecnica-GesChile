import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footerSuperContainer}>
      <div className={style.footerContainer}>
        <div className={style.footer}>
          <div className={style.copyrightFooter}>
            <p> Copyright © 2022 GesChile S.p.A.</p>
            <p>Chañarcillo 1201 - Maipú, Santiago de Chile.</p>
          </div>
          <div className={style.extrasFooter}>
            <p>FAQ's</p>
            <p>Help</p>
            <p>Work with us</p>
            <p>About</p>
          </div>
          <div className={style.socialMedia}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/nolan/64/instagram-new.png"
                alt="socialLogo"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/nolan/64/facebook-new.png"
                alt="socialLogo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
