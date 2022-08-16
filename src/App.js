import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef, useReducer } from "react";
import Item from "./components/Item";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  let [products, setProducts] = useState([]);
  let data1 = useRef(null);
  let [text, setText] = useState("");
  let [cart, dispatch] = useReducer(cartReducer, []);
  let [loading, setLoading] = useState(false);

  
  const fetchData = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setProducts(data);
    setLoading(true);
    // console.log(products)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const debounce = (func) => {
    let timer;
    console.log("debounce");
    return function (...args) {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        func(...args);
      }, 1000);
    };
  };
  const print = () => {
    // console.log(data1.value)
    setText(data1.current.value);
  };

  // const handleChange = debounce((e)=>{print()})

  if (loading === true) {
    return (
      <>
        <div className="cart">{cart}</div>
        <div className="container">
          {products.map((product) => (
            <Item key={product.id} product={product}></Item>
          ))}
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default App;
