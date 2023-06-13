import React from 'react';
import { styled } from 'styled-components';
import {MdFavorite} from "react-icons/md";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import Playlist from './Playlists';

export default function Sidebar() {
  return (
    <Container>
    <div className="top_link">
    <div className="logo">
    <img
     src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNK0HjdOlNPz2c017ykbtigc1DKZovusD8A&usqp=CAU"
     className='profile-img'
     alt='profile'/> 
     <p className="Music">MusiFly</p>
    </div>

    <ul>
      <li>
      <AiOutlineHome/>     
       <span>Home</span>
      </li>

      <li>
        <AiOutlineSearch/>
        <span>Search</span>
      </li>

      <li>
      <MdFavorite/>
      <span>Favorite</span>
      </li>

    </ul>
    
    </div>
   
  
  <Playlist/>
  </Container>
   
  )
}
 const Container=styled.div`
   background:linear-gradient(transparent,#222121);
 background-color: rgb(8, 39, 192);
 /* border-radius: 15px; */
 overflow: hidden;
 display: flex;
 flex-direction: column;
 height: 100%;
 width: 100%;
 

 .top_link{
  display: flex;
  flex-direction: column;
  /* margin-top: 43px; */
 }
 .logo{
  text-align: center;
  margin: 1rem 0;
  img{
    max-inline-size: 35%;
    block-size: auto;
    border-radius: 13px;
  }
 }
 ul{
  list-style-type: none;
  display: flex;
  flex-direction: column;
 padding: 1rem;
gap: 1rem; 
margin-top: -45px;
 
li{
 display: flex;
gap: 1rem;
transform: all 0.5s ease;
cursor: pointer;
transition: 0.3s ease-in-out;
margin-top: -5px;
font-size: 19px;
/* font-weight:bold; */
&:hover{
  color: white;
}
}
 }
 .Music{
  font-size: 40px;
  margin-top: 3px;
  /* padding: -2px; */
  color: #f23c3c;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
 }
 `
