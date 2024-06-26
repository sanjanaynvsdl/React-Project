function AddToCart({inputV}) {
    console.log("Rendering-AddToCart",inputV);
    return (
        <div>
            Add To Cart - {inputV}
        </div>
    )
}
export  default AddToCart;
//AddToCart is used in ProductCart component
//Now, Q) what-ever I write in input box it should be appended to the Add to cart component too 
//To achieve this we have props (which can pan be passed from parent to child component)
//We can pass the input value from ProductCard to AddToCart component!

// console.log("Rendering-AddToCart",inputV);
//This is written to check weather re-render causes here or not
//Re-rendering occurse coz we are using the inputV variable (which is a state-variable)