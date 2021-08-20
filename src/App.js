import "./App.css";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const arr = [
    {
      title: "Мужские кроссовки Nike Blazer Mid Suede",
      price: 12999,
      img: "/img/sneakers/1.jpg",
    },
    {
      title: "Мужские кроссовки Nike Air Max",
      price: 8500,
      img: "/img/sneakers/2.jpg",
    },
    {
      title: "Мужские кроссовки Nike Blike",
      price: 15000,
      img: "/img/sneakers/3.jpg",
    },
    {
      title: "Мужские кроссовки Nike Sambrero",
      price: 5000,
      img: "/img/sneakers/4.jpg",
    },
  ];

  const onPluse = () => {
    console.log("one plus card");
  };

  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
      <div className="content m-20 mb-40">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Пойск" />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {arr.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              img={item.img}
              onPluse={onPluse}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
