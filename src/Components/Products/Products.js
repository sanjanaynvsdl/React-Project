// import ProductCard from "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";

function Products() {
    const products = [
        {
        id: 1,
        title: "Apple iPhone 14",
        price: "Rs. 1,00,000"
        },
        {
        id: 2,
        title: "Apple iPhone 13",
        price: "Rs. 70,000"
        },
        {
        id: 3,
        title: "Google Pixel 7",
        price: "Rs. 50,000"
        },
        {
        id: 4,
        title: "Nokia 1100",
        price: "Rs. 2,000"
        },
        {
        id: 5,
        title: "Samsung Galaxy S10",
        price: "Rs. 1,00,000"
        },
        {
        id: 6,
        title: "Sony Xperia S10",
        price: "Rs. 1,00,000"
        }
        ];
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
                    return (<ProductCard title={item.title} price={item.price}/>)
                })
            }
        </div>
    )
   
}
export var a=10;
export var b=20;

export default Products;