import "./App.css";

function App() {
  return (
    <div className="wrapper clear">
      {/*  */}
      <div className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex justify-between mb-30">
            Корзина{" "}
            <img
              className="removeBtn cu-p"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </h2>

          {/*  */}
          <div className="items flex">
            {/*  */}
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>

          {/*  */}

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1874 руб.</b>
              </li>
            </ul>

            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Snakers</h3>
            <p className="opacity-5">Магазин лучших красовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart-logo" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user-logo" />
          </li>
        </ul>
      </header>
      <div className="content m-20 mb-40">
        {/*  */}

        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Пойск" />
          </div>
        </div>

        {/* Card */}
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="unlike" />
            </div>

            <img src="/img/sneakers/1.jpg" width={133} height={112} alt="" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div>
                <span className="d-flex flex-column">
                  Цена: <b>12 999 руб.</b>
                </span>
              </div>

              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/2.jpg" width={133} height={112} alt="" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div>
                <span className="d-flex flex-column">
                  Цена: <b>12 999 руб.</b>
                </span>
              </div>

              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/3.jpg" width={133} height={112} alt="" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div>
                <span className="d-flex flex-column">
                  Цена: <b>12 999 руб.</b>
                </span>
              </div>

              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/4.jpg" width={133} height={112} alt="" />
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div>
                <span className="d-flex flex-column">
                  Цена: <b>12 999 руб.</b>
                </span>
              </div>

              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>

        {/* end Card */}
      </div>
    </div>
  );
}

export default App;
