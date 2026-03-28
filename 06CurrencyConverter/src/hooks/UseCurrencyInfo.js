import { useState,useEffect,useId } from "react";



function useCurrencyInfo(currency){
   const [data,setData]=useState({})
    useEffect(()=>{fetch(`https://v6.exchangerate-api.com/v6/46caa489ea178949c4951492/latest/${currency}`)
    .then((res)=>res.json())
    .then((res)=>setData(res.conversion_rates))

},[currency])
return data
}
export default useCurrencyInfo