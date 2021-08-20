import React, { useState } from "react";

const Card = (props) => {
  const onClickButton = () => {
    alert(props.title);
  };

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unlike" />
      </div>

      <img src={props.img} width={133} height={112} alt="" />
      <h5>{props.title}</h5>
      <div className="cardBottom">
        <div>
          <span className="d-flex flex-column">
            Цена: <b>{props.price} руб.</b>
          </span>
        </div>

        <img
          className="plus"
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
};

export default Card;
