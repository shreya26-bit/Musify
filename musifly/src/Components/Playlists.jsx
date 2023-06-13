import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'; 
import { reducerCases } from '../utils/Constants';

export default function Playlists() {
  const [{token,playlists},dispatch]=useStateProvider();
  useEffect(()=>{
    const getPlaylistData =async()=>{
      const response =await axios.get("https://api.spotify.com/v1/me/playlists",{
        headers:{
          // Authorization: "Bearer BQB7_-...DRVrvA" + token,
          Authorization: "Bearer "+token,
          "Content-Type":"application/json",
        },
      });
      console.log(response);
      const {items}=response.data;
      console.log(items);
      const playlists =items.map(({name,id})=>{
      return {name,id};
      });
       console.log(playlists)
      dispatch({type:reducerCases.SET_PLAYLISTS,playlists});
    };
   
    getPlaylistData();
  },[token,dispatch]);
  return (
    <div>
    <ul>
      {
        playlists.map(({name,id})=>{
          return (
            <li key={id}>{name}</li>
          )
        }
        )
      }
        
    </ul>
    </div>
  )
  
}

//Get Playlist From spotify
