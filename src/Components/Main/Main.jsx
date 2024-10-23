import React, { useState } from "react";
import CreateMenu from "../CreateMenu/CreateMenu";
import style from "./Main.module.scss";

function Main(props) {
  const menu = props.item;
  const [arr, setArr] = useState([]);

  function generateId(length = 8) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  }

  menu.forEach((e) => {
    e.id = generateId();
  });

  function addBurger(idB) {
    const newArr = [...arr];
    const arrN = menu.filter((e) => e.id === idB);
    if (arrN[0].countN) {
      arrN[0].countN;
    } else {
      arrN[0].countN = 1;
    }
    newArr.push(arrN[0]);
    setArr(newArr);
  }

  const arrMenu = [...arr];
  return (
    <div className={style.main}>
      <CreateMenu item={arrMenu} />
      <div className={style.menuBoxRight}>
        <p className={style.menuName}>Бургеры</p>
        <div className={style.wrapperCard}>
          {menu.map((e, index) => {
            const { name, img, massa, price, id } = e;
            return (
              <div className={style.burgerCard} key={index}>
                <div className={style.imgWrapper}>
                  <img src={img} alt={name} />
                </div>
                <p className={style.price}>{price}₽</p>
                <p className={style.name}>{name}</p>
                <p className={style.massa}>{massa}</p>
                <button onClick={() => addBurger(id)}>Добавить</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
