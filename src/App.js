import "./App.css";

function App() {
  return (
    <div className="wrapper clear">
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
