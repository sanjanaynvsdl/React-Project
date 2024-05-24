import {a,b} from './Products.js'; //destructuring
import './ProductCard.css';
import {useRef} from 'react';
function ProductCard({title,price}) {
    let pRef=useRef(0);
    //Give de-fault value as 0 
    //If not assigned it will be undefined
    //use this with the required element!
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
    console.log(a,b);
    return (
        <div className='product-card'>
            {/* props.title   step-1*/} 
            {/* {props.title} step-2*/}
            {/* instead of props.title we can directly pass title */}
            {/* {title} single-parameter */}
            {/* onClick functioon in react  */}
            <p onClick={printTitle}>{title}</p>
            <p ref={pRef}>{price}</p>
        </div>
    )
}
export default ProductCard;