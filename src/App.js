import logo from './logo.svg';
import './App.css';
import {useEffect,useState,useRef} from 'react'

function App() {  
  let product;
  let data1 = useRef(null);
  let [text, setText] = useState('')
  const fetchData = async ()=>{
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json();
    product = data;
  }

  useEffect(() => {   
   fetchData().then(()=>{console.log(product)}
   )
  },[])
 
  const debounce = (func)=>{
    let timer;
    console.log("debounce")   
    return function (...args){
      if(timer)clearTimeout(timer)
      
      timer = setTimeout(()=>{func(...args)},1000);
    }
  }
  const print = ()=>{     
    // console.log(data1.value) 
      setText(data1.current.value)
  }
  
  const handleChange = debounce((e)=>{print()})

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
