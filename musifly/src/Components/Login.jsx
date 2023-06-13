import React from 'react'
import { styled } from 'styled-components'



export default function Login() {
  const handleClick=()=>{
    const clientId="8dd5724cccf44cd0bb2c7d574adac69e";
    const redirectUrl ="http://localhost:3000";
    const apiUrl="https://accounts.spotify.com/authorize";
    const scope=[
      "user-read-email",
      "user-read-private",
       "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-modify-playback-state",
      " user-read-currently-playing",
      
    ];
    window.location.href=`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_diaalog=true`;
  }
  return (
    <Container>
     <img
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgroPPCcuqFvDobRO1EDlR-ekMELw4PrEc1Q&usqp=CAU"
     alt="spotify"/>
     <button onClick={handleClick}>
      Connect Spotify 
     </button >
    </Container>
  );
}
const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width:100vw;
background-color:#0e0f0e;

button{
  margin-top:45px ;
  padding: 0.5rem 3rem;
  border-radius: 5rem;
  border: none;
  background-color: white;
  font-size: 25px;
  cursor: pointer;
}


img{
  height: 50vh;
  width: 30vw;
  border: none;
}

`;
