import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import MapList from "./pages/MapList/MapList";
import CreateMap from "./pages/createMap/CreateMap";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateMap />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/maplist" element={<MapList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
