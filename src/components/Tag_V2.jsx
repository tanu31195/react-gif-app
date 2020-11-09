import React, { useState } from 'react';
import useGif from "../useGif";

function Tag() {
    const [tag, setTag] = useState('dog');
    const { gif, fetchGif } = useGif(tag);

    return (
        <div>
            <h1> Random {tag} gif</h1>
            <img src={gif} alt="Random Gif" width="266px" />
            <input value={tag} onChange={(e) => setTag(e.target.value)}/>
            <button onClick={() => fetchGif(tag)}>Click for new</button>
        </div>
    );
}

export default Tag;
