import React,{createContext, useReducer,useContext} from 'react'
import {cartReducer} from '../reducers/cartReducer';
import {cartContext} from '../App'
export default function Item({product}){
      let {cartC} = useContext(cartContext)

    return <div className='item'>
        {
            // console.log(cartC)
        }
        <img className='img' src={product.image} ></img>
        <p>{product.title.length<25?product.title:`${product.title.slice(0,40)}...`}</p>
        <span>{product.price}${cartC.cart}</span>
        <div className='btns'>
        <button onClick={()=>{cartC.setCart({title:product.title, price:product.price})}}>+</button>
        {/* <div></div> */}
        <button>-</button>
        </div>
    </div>
}