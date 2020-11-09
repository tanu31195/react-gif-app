import React from 'react';
import useGif from "../useGif";

function Random() {
    const { gif, fetchGif } = useGif();

    return (
        <div>
            <h1> Random gif</h1>
            <img src={gif} alt="Random Gif" width="266px" />
            <button onClick={fetchGif}>Click for new</button>
        </div>
    );
}

export default Random;
