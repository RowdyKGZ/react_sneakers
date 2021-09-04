import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
        </Link>
        <div>
          <h3 className="text-uppercase">React Snakers</h3>
          <p className="opacity-5">Магазин лучших красовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={() => props.setCartOpenend(true)} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-20 cu-p"
              width={18}
              height={18}
              src="/img/heart.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
