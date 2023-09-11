import React from "react";
import "./Footer.css";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <div className="myfooter">
      <footer dir="auto" className="ali">
        <p>
          {i18n.language === "ar" && " تصميم و تطوير "}
          {i18n.language === "en" && " Designed and developed by "}
          {i18n.language === "fr" && " Conçu et développé par "}
          <span className="my-name">
            {i18n.language === "ar" && "يوسف العجيل"}
            {i18n.language === "en" && "Youssef El-Ogail"}
            {i18n.language === "fr" && "Youssef El-Ogail"}
          </span>
          <span>
            <i style={{ margin: "0 5px" }} className="fa-solid fa-heart"></i>{" "}
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
