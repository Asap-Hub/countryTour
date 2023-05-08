import { useState } from 'react'
import {useFetch} from '../Hooks/useFetch'
import './tourList.css'

export default function TourList (){

    const [Url, setUrl] = useState("http://localhost:3000/posts");
    
    const { data} = useFetch(Url);

    return(
        <div className='main-tourList'>
          <h2>Recreational Places in Ghana</h2>
            <ul >
          {data?.map((trip:any) =>(
            <li key={trip.id} className='tour-list'>
              <h2>{trip.name}</h2>
              <h2>{trip.loc}</h2>
              <h2>{trip.active === true ? "Active" : "InActive"}</h2>
            </li>
         
          ))}
            </ul>
            <button onClick={() =>setUrl("http://localhost:3000/posts?active=true") }>Active</button>
            <button onClick={() => setUrl("http://localhost:3000/posts?active=false")}>InActive</button>
        </div>
    )

} 

