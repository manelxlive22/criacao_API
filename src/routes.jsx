import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from './home';
import BMW from './bmw';
import MERCEDES from "./mercedes";
import FERRARI from "./ferrari"
import MCLAREN from "./mclaren"
import PORSCHE from "./porsche";
import NISSAN from "./nissan";
import MASERATI from "./maserati";
import BUGATTI from "./bugatti";
import KOENIGSEGG from "./koenigsegg";
import PAGANI from "./pagani";
import AUDI from "./audi";
import CARS from './car';
import SOBRE from './sobre'
function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bmw" element={<BMW />} />
                <Route path="/mercedes" element={<MERCEDES />} />
                <Route path="/ferrari" element={<FERRARI />} />
                <Route path="/mclaren" element={<MCLAREN />} />
                <Route path="/porsche" element={<PORSCHE />} />
                <Route path="/nissan" element={<NISSAN />} />
                <Route path="/maserati" element={<MASERATI/>} />
                <Route path="/bugatti" element={<BUGATTI />} />
                <Route path="/koenigsegg" element={<KOENIGSEGG />} />
                <Route path="/pagani" element={<PAGANI />} />
                <Route path="/audi" element={<AUDI />} />
                <Route path="/cars" element={<CARS />} />
                <Route path="/about" element={<SOBRE />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
