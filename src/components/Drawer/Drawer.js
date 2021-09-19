import React from "react";
import axios from "axios";

import Info from "../Info";
import { useCard } from "../../hooks/useCard";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ setCartOpenend, items, onRemove, opened }) => {
  const { cardItems, setCardItems, total_price } = useCard();

  const [isOrderComplited, setIsOrderComplited] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const data = await axios.post(
        "https://611f67779771bf001785c902.mockapi.io/orders",
        { items: cardItems }
      );
      setOrderId(data.data.id);
      setIsOrderComplited(true);
      setCardItems([]);

      for (let i = 0; i < cardItems.length; i++) {
        const item = cardItems[i];
        await axios.delete(
          "https://611f67779771bf001785c902.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      console.log(error.message);
      alert("Не удалось создать заказ :(");
    }
    setIsLoading(false);
  };

  return (
    <div className={`overlay ${opened ? "overlayVisible" : ""}`}>
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={() => {
              setCartOpenend(false);
            }}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="close"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.img})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => {
                      onRemove(obj.id);
                    }}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>{total_price} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(total_price / 100) * 5} руб.</b>
                </li>
              </ul>

              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplited ? "Заказ оформлен" : "Корзина пуста"}
            description={
              isOrderComplited
                ? `Ваш заказ #${orderId} скоро будет передан курьеру ожидайте`
                : "Добавте хотя бы 1 пару карсовок, для того что бы сделать заказ"
            }
            image={
              isOrderComplited
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
