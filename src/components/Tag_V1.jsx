import React, {useState, useEffect} from 'react';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [tag, setTag] = useState('Dog');
    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {

        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url); //promise...
        console.log(data);

        const imageSrc = data.data.images.downsized_large.url;
        console.log(imageSrc);
        setGif(imageSrc);

    };

    useEffect(() => {

        fetchGif(tag);
    }, [tag]);

    const handleClick = () => {
        fetchGif(tag);
    };

    return (
        <div>
            <h1> Random {tag} gif</h1>
            <img src={gif} alt="Random Gif" width="266px" />
            <input value={tag} onChange={(e) => setTag(e.target.value)}/>
            <button onClick={handleClick}>Click for new</button>
        </div>
    );
};

export default Random;
