import React from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
  const { setCartOpenend } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120" src={image} alt="Empty" />
      <h2> {title} </h2>
      <p className="opacity-6">{description}</p>
      <button
        className="greenButton"
        onClick={() => {
          setCartOpenend(false);
        }}
      >
        <img src="img/arrow.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
