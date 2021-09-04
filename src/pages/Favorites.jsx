import React from "react";
import AppContext from "../context";
import Card from "../components/Card/Card";

const Favorites = ({ onAddToFavorite }) => {
  const { favorites } = React.useContext(AppContext);

  return (
    <div>
      <div className="content m-20 mb-40">
        <div className="d-flex align-center justify-between">
          <h1>Мой закладки</h1>
        </div>

        <div className="d-flex flex-wrap ml-25">
          {favorites.map((item) => (
            <Card
              key={item.id}
              favorited={true}
              onAddToFavorite={onAddToFavorite}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
