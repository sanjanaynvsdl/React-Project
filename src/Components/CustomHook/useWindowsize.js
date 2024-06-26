import { useState, useEffect } from 'react';
function useWindowsize() {
    let [windowSize,setWindowsize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

    function calsize() {
        setWindowsize({
            width:window.innerWidth,
            height:window.innerHeight
        });
    }

    useEffect( ()=> {
        window.addEventListener('resize',calsize);
        return () => {
            window.removeEventListener('resize',calsize);
        }

    },[]);
    return windowSize;
}
export default useWindowsize;