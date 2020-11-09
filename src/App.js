import React from 'react';

import Random from "./components/Random_V2";
import Tag from "./components/Tag_V2";

import './App.css';

//Functional component: No curly braces as we get an instant return
const App = () => (
    <div>
        <h1>Random GIF Application</h1>
        <div className="main-container">
            <Random/>
            <Tag/>
        </div>
    </div>
);

export default App;
