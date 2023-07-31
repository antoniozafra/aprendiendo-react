import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css"
import {CounterApp} from './CounterApp';
import { FirstApp } from './FirstApp';


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <CounterApp value={10} /> */}
        <FirstApp title ="Este es el titulio"/>
    </React.StrictMode>
);
