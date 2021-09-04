import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

const Card = ({
  id,
  title,
  img,
  price,
  onPluse,
  onAddToFavorite,
  favorited = false,
  loading = false,
}) => {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPluse({ title, img, price, id });
  };

  const onLickFavorite = () => {
    onAddToFavorite({ id, title, img, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      {loading ? (
        <div className="card">
          <ContentLoader
            speed={2}
            width={170}
            height={199}
            viewBox="0 0 170 199"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="160" height="90" />
            <rect x="0" y="102" rx="10" ry="10" width="150" height="15" />
            <rect x="0" y="127" rx="10" ry="10" width="100" height="15" />
            <rect x="0" y="166" rx="10" ry="10" width="80" height="25" />
            <rect x="129" y="159" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
        </div>
      ) : (
        <>
          <div className="favorite" onClick={onLickFavorite}>
            <img
              src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
              alt="unlike"
            />
          </div>
          <img src={img} width={133} height={112} alt="" />
          <h5>{title}</h5>
          <div className="cardBottom">
            <div>
              <span className="d-flex flex-column">
                Цена: <b>{price} руб.</b>
              </span>
            </div>

            <img
              className="plus"
              onClick={onClickPlus}
              src={
                isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"
              }
              alt="plus"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
