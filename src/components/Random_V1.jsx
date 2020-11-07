import React, { useState, useEffect } from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [gif, setGif] = useState('');

    //componentDidMount ... first render
    useEffect(() => {
        const fetchGif = async () => {

            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            const {data} = await axios.get(url); //promise...
            console.log(data);

            const imageSrc = data.data.images.downsized_large.url;
            console.log(imageSrc);
            setGif(imageSrc);

        };
        fetchGif();
    }, []);

    return (
        <>
            <h1> Random </h1>
            <img src={gif} alt="Random Gif"/>
        </>
    );
};

export default Random;
