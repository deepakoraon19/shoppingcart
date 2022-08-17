
import "./App.css";
import React,{ useEffect, useState, useRef, useReducer, useContext} from "react";
import Item from "./components/Item";
// import { cartReducer } from "./reducers/cartReducer";

export const cartContext = React.createContext()

function App() {
  let [products, setProducts] = useState([]);
  let data1 = useRef(null);
  let [text, setText] = useState("");
  // let [cart, dispatch] = useReducer(cartReducer, []);
  let [loading, setLoading] = useState(false);
  let [cart,setCart] = useState(["Products"])
  // let cartContext = useContext();
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
      <cartContext.Provider value={{cartC:[cart,setCart]}} >
      <div className="cart">{cart}</div>
        <div className="container">
          {products.map((product) => (
            <Item key={product.id} product={product}></Item>
          ))}
        </div>
      </cartContext.Provider>
        
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

// export cartContext;
export default App;
