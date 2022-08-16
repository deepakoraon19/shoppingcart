import React,{useReducer} from 'react'
import {cartReducer} from '../reducers/cartReducer';

export default function Item({product}){
    return <div className='item'>
        <img className='img' src={product.image} ></img>
        <p>{product.title.length<25?product.title:`${product.title.slice(0,40)}...`}</p>
        <span>{product.price}$</span>
        <div className='btns'>
        <button onClick={()=>{dispatch({type:'add'})}}>+</button>
        {/* <div></div> */}
        <button>-</button>
        </div>
    </div>
}