import logo from './logo.svg';
import './App.css';
import Products from './Components/Products/Products.js';
import { useState } from 'react';

function App() {
  //createCart-function-increasequantity and decrease quantity!
  let [cart,setCart] = useState({});
  function increaseQuantity(product) {
    //Copythe cart object to point to another reference so, that the compare function works
    const newCart={...cart};
    if(!newCart[product.id]) {
      newCart[product.id]={
        // id:product.id,
        // title:product.title,
        // price:product.price,
        ...product,
        quantity:0
      }
    }
    newCart[product.id].quantity++;
    console.log(newCart);
    setCart(newCart);
  }
  function decreaseQuantity(product) {
    const newCart={...cart};
    if(!newCart[product.id]) return; //If the product is not in the cart then return
    newCart[product.id].quantity--;
    if(newCart[product.id].quantity<=0) {
      delete newCart[product.id];
    }
    setCart(newCart);

  }

  return (
    <div className="App">
      <Products cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </div>
  );
}

export default App;

//cart - 
//We have a object every-time a new object is clicked(Addtocart)
//First- we find the object in the cart and increment else, add the object to the cart
//Second- IF Obj.Quantity=1 and we decrement it 
//Then we should remove the object from the cart

