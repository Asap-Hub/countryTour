import { url } from "inspector";
import { useEffect, useState } from "react"

export const useFetch =(Url:any) => {

    const [ data, setData] = useState<any>([]);

   useEffect(   () =>{
    const fetchData = async () => {
          const response = await fetch(Url);
          const json =  await response.json();

          setData(json); 
    } 
    fetchData();
   }, 
   [Url])

   return { data}

}