import React from 'react'
import axios from 'axios';
import "./PaginationBar.css"
export default function PaginationBar({nextUrl,prevUrl,selectedBreeds,setDogList,setNextUrl,setPrevUrl}) {



    const changePage = async (direction) => {

        

        let directionParams = direction === "prev" ? prevUrl : nextUrl;

        try {
          const response = await axios.get(
            "https://frontend-take-home-service.fetch.com" + directionParams,
            {
              withCredentials: true, 
              
            }
          );
          console.log(response);
        
  
          
          
          setNextUrl(response.data.next || null);
          setPrevUrl(response.data.prev || null);
    
    
    
          const dogDetails = await axios.post(
            "https://frontend-take-home-service.fetch.com/dogs",
            response.data.resultIds,
            {
              withCredentials: true,
            }
          );
      
          setDogList(dogDetails.data);
    
          
    
    
    
    
    
          console.log("Login successful:", response);
    
        } catch (error) {
          console.error("Login failed:", error);
        }
    
    
    
    
      }




  return (
    <div className='pagination-bar'>
      <button onClick={()=>changePage("prev")}>Prev</button>
      <button onClick={()=>changePage("next")}>Next</button>
    </div>
  )
}
