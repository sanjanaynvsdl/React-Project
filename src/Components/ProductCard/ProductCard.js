//import {a,b} from '../Products/Products.js'; //destructuring
import AddToCart from '../AddToCart/AddToCart';
import './ProductCard.css';
import {useRef,useState} from 'react';
function ProductCard({title,price}) {
    let pRef=useRef(0);
    // let iRef=useRef(0);
    // let oRef=useRef(0);
    //Give de-fault value as 0 
    //If not assigned it will be undefined
    //use this with the required element!
    //useState hook
    let [inputV,setInputV]=useState('');
    function printTitle() {
        console.log(title);
        console.log(pRef.current.innerText);
        if(pRef.current.style.display==='none') {
            pRef.current.style.display='block';
        }
        else {
            pRef.current.style.display='none';
        }
    }
    //using useRef
    // function displayOutput() {
    //     console.log(iRef.current);
    //     console.log(oRef.current);
    //     oRef.current.innerText= `The output is :   ${iRef.current.value}`;
    //}
    // In this case we are using the current value of the input field and appending the new value to the output field
    // oRef.current.innerText=oRef.current.innerText+iRef.current.value;
    // This repeats the prev value too!
    // console.log(event.target.value);
    // oRef.current.innerText=event.target.value;
    // console.log(a,b);
    //import {a,b} -- De-structuring this is how we use named exports
    //using State-varible
    //this hits when-evr we use this variable (every time I input somthing in the input field it re-renders the function)
    console.log("Rendering-function",inputV);
    function displayOutput(event) {
        setInputV(event.target.value);
    }
    return (
        <div className='product-card'>
            {/* Q1) Hide the price when the title is clicked vice-versa */}
            <p onClick={printTitle}>{title}</p>
            <p ref={pRef}>{price.value}</p>
            {/* Q1) set the input value to output-p-tag using useState */}
            <input type="text" onChange={displayOutput} value={inputV}/>
            <p>The output is - {inputV} </p> 
            <AddToCart inputV={inputV}/>
        </div>
    )
}
export default ProductCard;

// 24-05-2024
// ----------------------------------Props----------------------------------->
//Create a ProductCard component
// props.title   step-1 (to get the numbering of the product-card in produt.js title=1, title=2)
// {props.title} step-2
// instead of props.title we can directly pass title
// {title} single-parameter (to make dynamic we use {} and pass the title)
// onClick functioon in react 

//27-05-2024
// ----------------------------------useRef----------------------------------->

// Q1) set the input value to output-p-tag using useRef

//Instead we can use state-variable hook 

//----------------------------------useState----------------------------------->
//useState hook
//simply states-says - It would cause a re-render of the function when-ever I input something in the input field
//Here, we are controlling  the  value based on 
//input and out-put states so, this is called!
//Controlled-component 99.9% use (controlled-component)

//---------------------------Child-component-AddToCart-------------------------->
//(AddToCart) is used in ProductCard component
//suing props we passed input val
//So, AddToCart also re-renders coz we used state-var

//Irrespective of state-var used or not! it re-renders again 
//because of the parent component re-rendering

// ----------------------------------useEffect----------------------------------->
//useEffect(funtoin, [dependency-array])
//This will called based on the dependency-array 
//If the dependency-array is empty it will be called only once
//When the component is mounted
//If the dependency-array is not empty it will be called every time the dependency-array is changed
//we-can  only use state-variable/props that are state-vaiables in parent  in the dependency-array











