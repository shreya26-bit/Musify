import React from 'react'
import { styled } from 'styled-components'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import EndSidebar from './EndSidebar'
import Footer from './Footer'


export default function Spotify() {
  return(
        
        <Container>
            
          
          <div className="musifly_body">
            <Sidebar/>
           <div className="body">
            <Navbar/>  
             <div className="body_contents">
               <Body/>
              
            </div>
            <div className="end">
              <EndSidebar/>
            </div>
          
      
           </div>
         
        
         
          </div>
         
        
      
          <div className="spotfy_footer">
            <Footer/>
          </div>
            <div className="end">
              <EndSidebar/>
            </div>
         
          
        </Container>
        
  );
}


const Container =styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh ;


  .musifly_body{
  display: grid;
  grid-template-columns: 15vw  85vw 85vw;
  max-height: 100%;
 max-width: 100%;
  background:linear-gradient(transparent,rgba(0,0,0,1));
  background-color:rgb(9, 5, 78);
  color: white;
  flex-grow: 1;
 
}
.body{
  max-width:100%;
  max-height: 100%;
  overflow: hidden;
  display: grid;
grid-template-columns:15vw 65vw 55vw ;
  /* background-color: red; */
 
 

}
.end{
  display: flex;
  
  border: 2px solid black;
}


  
`