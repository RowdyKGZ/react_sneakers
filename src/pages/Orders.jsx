import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

const Orders = ({ onAddToFavorite }) => {
  const { onAddToCard } = React.useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://611f67779771bf001785c902.mockapi.io/orders"
        );
        // console.log(data.map((obj) => obj.items).flat());
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе на заказы", error.message);
      }
    })();
  }, []);

  return (
    <div>
      <div className="content m-20 mb-40">
        <div className="d-flex align-center justify-between">
          <h1>Мой заказы</h1>
        </div>

        <div className="d-flex flex-wrap ml-25">
          {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            <Card key={index} {...item} loading={isLoading} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
