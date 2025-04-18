import React from 'react'
import "./ContentSection.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ContentSection({favoritedDogs,setFavoritedDogs}) {





  const navigate = useNavigate()


  const findMatch = async () => {
    const ids = favoritedDogs.map((dog) => dog.id);

    try {
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/dogs/match",
        
          
        ids
        ,
        {
          withCredentials: true, 
          
        }
      );
   

      navigate(`/match_page?matchId=${response.data.match}`)
      


      





      console.log("Login successful:", response);

    } catch (error) {
      console.error("Login failed:", error);
    }



  }
  return (
    <div className='content-section'>
        


          <div className='headr-section'>

              <h1>Favorites list</h1>
              <p>Click on as many dogs to favorite as you want. When you're ready, select Generate to find your perfect pup!</p>
          </div>


          <div className='content'> 
              <button onClick={()=>findMatch()}>Generate</button>
                
              {
              favoritedDogs.map((dog_id)=>(<h1>{dog_id.name}</h1>))
              }
          </div>
        
    </div>
  )
}
