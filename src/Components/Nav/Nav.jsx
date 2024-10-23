import React from "react";
import style from "./Nav.module.scss";

function Nav(props) {
  console.log(props.item);
  const slider = props.item;
  return (
    <nav>
      {slider.map((e, index) => {
        const img = e.img;
        const title = e.title;
        return (
          <button key={index}>
            <img src={img} alt={title} />
            {title}
          </button>
        );
      })}
    </nav>
  );
}

export default Nav;
