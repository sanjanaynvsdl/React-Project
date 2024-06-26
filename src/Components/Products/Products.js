// import ProductCard from "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState , useEffect } from "react";
import useWindowsize from "../CustomHook/useWindowsize";

function Products() {
    // const products = [
    //     {
    //     id: 1,
    //     title: "Apple iPhone 14",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 2,
    //     title: "Apple iPhone 13",
    //     price: "Rs. 70,000"
    //     },
    //     {
    //     id: 3,
    //     title: "Google Pixel 7",
    //     price: "Rs. 50,000"
    //     },
    //     {
    //     id: 4,
    //     title: "Nokia 1100",
    //     price: "Rs. 2,000"
    //     },
    //     {
    //     id: 5,
    //     title: "Samsung Galaxy S10",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 6,
    //     title: "Sony Xperia S10",
    //     price: "Rs. 1,00,000"
    //     }
    //     ];
    let [products,setProducts]=useState([]);
    console.log(useWindowsize());
    useEffect(()=>{
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
            (response)=> {
                return response.json();
            }
        ).then (
            (data)=> {
                console.log(data);
                setProducts(data);
            }
        )

    },[]);

    

    return (
        // <div>
        //     I am Product
        //     {/* To avoid this everytime we can use map function */}
        //     <ProductCard title={1} price={200}/>
        //     <ProductCard title={2} price={100}/>
        //     <ProductCard title={3} price={400}/>
        //     <ProductCard title={4} price={800}/>
        // </div>
        <div>
             I am Product
             <Effect/>
            {
                products.map(function(item) {
                    return (<ProductCard key={item.id} title={item.title} price={item.price}/>)
                })
            }
        </div>
    )
   
}
export var a=10;
export var b=20;

export default Products;


//Fetching the data
//fetch the data from api -- once the promise is returned we use then to get the data
//1.will get the response(body,status-code,headers)
//2. convert the response to json
//3. get the data!

//To set the values from the api to the state-variable we use setProducts(data)
//Change the ProductCart--> price to price.value
//Because the price is an object and we need to get the value from the object


//If we directly setProducts in the fetch function it causes re-render again and again 
//So, api call goes infinite times
//To avoid this we use useEffect
//Wrap the complete fetch function in useEffect