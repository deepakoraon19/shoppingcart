import React from 'react'
import {useReducer}  from 'react'
export default function cartReducer(cart, action) {
    switch (action.type) {
      case "add":
        return { count: cart.state + 1 };
    }
  }
