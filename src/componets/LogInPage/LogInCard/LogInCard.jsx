import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./LogInCard.css"

import { useState } from 'react'
export default function LogInCard() {

  const [language,setLanguage] = useState("english");
  const [name,setName] = useState("name");
  const[email,setEmail] = useState("email@gmail.com");
  const logInNav = useNavigate();
  const changeLanguage = () =>{

      if (language == "english"){
        setLanguage("spanish")

      } else if (language == "spanish"){
        setLanguage("english")

      }








  }






  const logIn = async () => {
    try {
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login",
        {
          name: name,
          email: email,
        },
        {
          withCredentials: true, 
        }
      );
      logInNav("/search");
      console.log("Login successful:", response);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  

  return (
    <div className='log-in-card'>
      
        <div className = "top-row">
            <h2>Dogofetcher.</h2>
            <button on onClick={()=>changeLanguage()}>
                {language == "english" ? <p>Sp⬇️</p> : <p>En⬇️</p>}
            </button>
        </div>

        <div className='headr-row'>
              {language == "english" ? <h1>Hi There!</h1> : <h1>¡Hola!</h1>}
              {language == "english" ? <p>Welcome to Dogofetcher, log in page</p> : <p>Bienvenido a Dogofetcher, página de inicio de sesión</p>}
        </div>
        <div className='input-row'>
            
            <input placeholder = "email"></input>
            <input placeholder = "user name"></input>
            <button onClick={()=>logIn()}>Log in</button>

        </div>
    
        <div className='mesg-row'>
            {language == "english" ? <p>Thank you for choosing Dogofetcher. Good luck fetching</p> : <p>Gracias por elegir Dogofetcher. ¡Buena suerte con la búsqueda!
              </p>}
        </div>






    





    </div>
  )
}
