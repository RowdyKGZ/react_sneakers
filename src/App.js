import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpenend, setCartOpenend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, []);

  const onAddToCard = (obj) => {
    try {
      if (cardItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://611f67779771bf001785c902.mockapi.io/cart/${obj.id}`
        );
        setCardItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://611f67779771bf001785c902.mockapi.io/cart", obj);
        setCardItems((prev) => [...prev, obj]);
      }
    } catch (e) {
      alert("Не удалось добавить в избранное");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const oneRemoveItem = (id) => {
    axios.delete(`https://611f67779771bf001785c902.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
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
    return cardItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider value={{ items, favorites, cardItems, isItemAdded }}>
      <div className="wrapper clear">
        {cartOpenend && (
          <Drawer
            items={cardItems}
            setCartOpenend={setCartOpenend}
            onRemove={oneRemoveItem}
          />
        )}
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
      </div>
    </AppContext.Provider>
  );
}

export default App;
