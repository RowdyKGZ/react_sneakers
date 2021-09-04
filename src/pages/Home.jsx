import React from "react";
import Card from "../components/Card/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCard,
  onAddToFavorite,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onPluse={onAddToCard}
        onAddToFavorite={onAddToFavorite}
        {...item}
        loading={isLoading}
      />
    ));
  };
  return (
    <div>
      <div className="content m-20 mb-40">
        <div className="d-flex align-center justify-between">
          <h1>
            {searchValue
              ? `Пойск по запросу "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => {
                  setSearchValue("");
                }}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Пойск"
            />
          </div>
        </div>

        <div className="d-flex flex-wrap ml-25">{renderItems()}</div>
      </div>
    </div>
  );
};

export default Home;
