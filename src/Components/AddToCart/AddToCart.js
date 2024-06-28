import { useContext } from 'react';
import CartContext from '../../Context/CartContext.js';
function AddToCart({product}) {

    //input the CartContext
    const {cart,increaseQuantity, decreaseQuantity}=useContext(CartContext);
    
    function increase() {
        increaseQuantity(product);
    }
    function decrease() {
        decreaseQuantity(product);
    }
    //But the problem if the product is not in the cart! so,add if-else
    let quantity=cart[product.id]? cart[product.id].quantity:0;
    if(quantity===0) {
        return (
            <div>
                <button onClick={increase}>Add-To-Cart</button>
                
            </div>
        )
    }
    else {
        return(
            <div>
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
            </div>
        )
    }
    
}
export  default AddToCart;
//AddToCart is used in ProductCart component
//Now, Q) what-ever I write in input box it should be appended to the Add to cart component too 
//To achieve this we have props (which can pan be passed from parent to child component)
//We can pass the input value from ProductCard to AddToCart 

// console.log("Rendering-AddToCart",inputV);
//This is written to check weather re-render causes here or not
//Re-rendering occurse coz we are using the inputV variable (which is a state-variable)


//------------Implement Cart- state-management-19-06-2024---------------->

//cart = 
//Two-ways to implement cart
//Array of objects 
//Object of objects (Efficent way)
