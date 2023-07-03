import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    //no need of tag here

   //below func calls api, gets meme out of it and adds it to gif, gif is a state variable
   //since n/w cll takes time so initially loading is set to true
    async function fetchData(tag) {
      setLoading(true);
      //const output = await axios.get(tag ? `${url}&tag=${tag}`  : url);  //destructing done in below line so that we take data from output
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);   //tells how to implement url, like random pr tag based 
      const imageSource = data.data.images.downsized_large.url;  //path to get the data we want on screen //whose path is data.data.images.downsized_large.url
      setGif(imageSource);  //links imgsrc and gif in const funct using setgif
      setLoading(false);
    }
    
    //above function is called using useeffect below
    useEffect( () => {
      fetchData('car');
    },[] )

    return {gif,loading, fetchData}; //response
}

export default useGif

//usegif is a custom hook, a kindof function, used in random and tag.js
//const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;..is the url on which api call will be made using api key
//process.env is way to access env variable
//api call ..async func fetchdata
//axios can also be used in place of fetch by writing axios.get(url) request
//like fetch api, axios is also based on promise
//normally all network calls require await

//WHY WE GET DIFFERENT MEME EACH TIME
//whenever gif value changes, bcz of gif being a state variable, it is rerendered. also since we are doing random?api_key..random api calling

//there was much code duplication in random nd tag
//in any cmpnt, we dont need to worry much about jsx code(written under return function)
//hence we created custom hook..for tag, gifvalue, loading
//no need of jsx code in hook..no handlers