import React, { useState, useEffect } from "react";
import styleMenu from "./CreateMenu.module.scss";

function CreateMenu(props) {
  const arrE = [...props.item];
  console.log(arrE);
  const [count, setCount] = useState(props.item);

  useEffect(() => {
    const eatN = arrE.filter((e, index, arr) => {
      return index === arr.findIndex((t) => t.id === e.id && t.countN > 0);
    });
    setCount(eatN);
  }, [props.item]);
  const eat = [...count];

  let number = 0;
  eat.forEach((e) => {
    number = number + e.countN;
  });

  let summ = 0;
  eat.forEach((e) => {
    const { price, countN } = e;
    summ += price * countN;
  });

  function prevCount(i) {
    const newArr = [...count];
    newArr.forEach((e, index) => {
      if (e.id === i) {
        e.countN -= 1;
        if (e.countN === 0) {
          newArr.splice(index, 1);
        }
        setCount(newArr);
      }
    });
  }

  function nextCount(i) {
    const newArr = [...count];
    newArr.forEach((e) => {
      if (e.id === i) {
        e.countN += 1;
      }
    });
    setCount(newArr);
  }

  let basketO = "";
  let order = "";
  if (number === 0) {
    basketO = <p className={styleMenu.basketCl}>Тут пока пусто :(</p>;
  }

  if (number > 0) {
    order = (
      <>
        <div className={styleMenu.all}>
          <p>Итого</p>
          <p>{summ}₽</p>
        </div>
        <button className={styleMenu.btn}>Оформить заказ</button>
        <p className={styleMenu.delivery}>Бесплатная доставка</p>
      </>
    );
  }

  return (
    <div className={styleMenu.card}>
      <div className={styleMenu.eatMenu}>
        <div className={styleMenu.basketBox}>
          <p className={styleMenu.basket}>Корзина</p>
          <p className={styleMenu.basketText}>{number}</p>
        </div>
        {basketO}
        <div className={styleMenu.boxCard}>
          {eat.map((e, index) => {
            const { name, img, massa, price, countN, id } = e;
            return (
              <div className={styleMenu.containerBox} key={index}>
                <div className={styleMenu.imgBox}>
                  <img src={img} alt={name} />
                </div>
                <div className={styleMenu.descrBox}>
                  <p className={styleMenu.text}>{name}</p>
                  <p className={styleMenu.text}>{massa}</p>
                  <p className={styleMenu.text}>{price}₽</p>
                </div>
                <div className={styleMenu.countBox}>
                  <button
                    onClick={() => prevCount(id)}
                    className={styleMenu.prevCount}
                  >
                    -
                  </button>
                  <p>{countN}</p>
                  <button
                    onClick={() => nextCount(id)}
                    className={styleMenu.nextCount}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className={styleMenu.all}>
          <p>Итого</p>
          <p>{summ}₽</p>
        </div>
        <button className={styleMenu.btn}>Оформить заказ</button>
        <p className={styleMenu.delivery}>Бесплатная доставка</p> */}
        {order}
      </div>
    </div>
  );
}

export default CreateMenu;
