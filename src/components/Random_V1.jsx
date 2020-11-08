import React, {useState, useEffect} from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [gif, setGif] = useState('');

    const fetchGif = async () => {

        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url); //promise...
        console.log(data);

        const imageSrc = data.data.images.downsized_large.url;
        console.log(imageSrc);
        setGif(imageSrc);

    };

    //componentDidMount ... first render only due to empty array []
    //Fetch the data as soon as the component mounts
    useEffect(() => {

        fetchGif();
    }, []); //[] passing an empty array will run this only at first render

    const handleClick = () => {
        fetchGif();
    };

    return (
        <div>
            <h1> Random </h1>
            <img src={gif} alt="Random Gif" width="266px" />
            <button onClick={handleClick}>Click for new</button>
        </div>
    );
};

export default Random;
