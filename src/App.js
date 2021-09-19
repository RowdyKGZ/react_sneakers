import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpenend, setCartOpenend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // const [cartResponse, favoritesResponse, itemsResponse] =
        //   await Promise.all(
        //     axios.get("https://611f67779771bf001785c902.mockapi.io/cart"),
        //     axios.get("https://611f67779771bf001785c902.mockapi.io/favorites"),
        //     axios.get("https://611f67779771bf001785c902.mockapi.io/items")
        //   );

        const cartResponse = await axios.get(
          "https://611f67779771bf001785c902.mockapi.io/cart"
        );

        const favoritesResponse = await axios.get(
          "https://611f67779771bf001785c902.mockapi.io/favorites"
        );

        const itemsResponse = await axios.get(
          "https://611f67779771bf001785c902.mockapi.io/items"
        );

        setIsLoading(false);

        setCardItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }

    fetchData();
  }, []);

  const onAddToCard = (obj) => {
    try {
      const findItem = cardItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCardItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        axios.delete(
          `https://611f67779771bf001785c902.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCardItems((prev) => [...prev, obj]);
        const { data } = axios.post(
          "https://611f67779771bf001785c902.mockapi.io/cart",
          obj
        );
        setCardItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (e) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const oneRemoveItem = (id) => {
    try {
      axios.delete(`https://611f67779771bf001785c902.mockapi.io/cart/${id}`);
      setCardItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Не удалось удалить товар с корзины");
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://611f67779771bf001785c902.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://611f67779771bf001785c902.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (e) {
      alert("Не удалось добавить в фавориты");
    }
  };

  const isItemAdded = (id) => {
    return cardItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        cardItems,
        isItemAdded,
        setCartOpenend,
        setCardItems,
        onAddToCard,
      }}
    >
      <div className="wrapper clear">
        <div>
          <Drawer
            items={cardItems}
            setCartOpenend={setCartOpenend}
            onRemove={oneRemoveItem}
            opened={cartOpenend}
          />
        </div>

        <Header setCartOpenend={setCartOpenend} />

        <Route exact path="/favorites">
          <Favorites onAddToFavorite={onAddToFavorite} />
        </Route>

        <Route exact path="/">
          <Home
            items={items}
            cardItems={cardItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCard={onAddToCard}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
