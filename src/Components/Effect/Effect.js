import { useState,useEffect } from 'react';
function Effect() {


    let [count1,setCount1]=useState(0);
    let [count2,setCount2]=useState(0); 

    //In this case It only renders when the component is mounted!
    useEffect (()=> {
        console.log("useEffect");
    },[]);

    //In this case It only renders when count1 changes
    // useEffect (function () {
    //     console.log("useEffect -count-1");
    // },[count1]);

    //In this case it renders when count1 or count2 changes
    useEffect( function() {
        console.log("useEffect-count-1/2")
    },[count1,count2]);


    function increment1() {
        setCount1(count1+1);
    }
    function increment2() {
        setCount2(count2+2);
    }

    return(
        <div>
            <button onClick={increment1}>Button-1</button>
            <p>Count - {count1}</p>
            <button onClick={increment2}>Button-2</button>
            <p>Count - {count2}</p>

        </div>
    )
}
export default Effect;


//useEffect
//You can pass a call-back function to me 
//This call-back function will be called based on the dependency-array
//Mounting : When the component is rendered for the first time
// ----------------------------useEffect----------------------------------->
//Empty dependency-array        : useEffect will be called only once(mounting)
//Non-empty dependency-array    : useEffect will be called every time the dependency-array is changed
//NO dependency-array           : useEffect will be called every time the component is rendered

//What is feature of react is used to customise a Component --- props