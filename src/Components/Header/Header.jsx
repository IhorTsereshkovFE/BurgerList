import React from "react";
import logo from "../../assets/logoHeader.png";
import burger from "../../assets/burgerHeader.png";
import style from "./Header.module.scss";

function Header() {
  return (
    <header>
      <div className={style.logoHeader}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.headerTitle}>
        <div className={style.leftBox}>
          <img src={burger} alt="burger" />
        </div>
        <div className={style.rightBox}>
          <h1>
            Только самые <p>сочные бургеры!</p>
          </h1>
          <p className={style.delivery}>Бесплатная доставка от 599₽</p>
          <button>Добавить</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
