//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let counter = 0;

const func = () => {
    counter++;
    let stringCounter = "00000" + counter;

    var result = stringCounter.slice(-6);

    root.render(<Home
        prop1={result.charAt(0)}
        prop2={result.charAt(1)}
        prop3={result.charAt(2)}
        prop4={result.charAt(3)}
        prop5={result.charAt(4)}
        prop6={result.charAt(5)}
    />);
}

//render your react application
var root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(func, 1000);
