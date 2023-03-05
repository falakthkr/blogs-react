import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login/Login";
// import PrivateRoutes from "./PrivateRoutes"
import Dashboard from "../pages/Viewer/Home/Dashboard";
import TopicsBoard from "../pages/Viewer/Topics/TopicsBoard";
import DiscoverBoard from "../pages/Viewer/Discover/DiscoverBoard";

const PublicRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/home/*" element={<PrivateRoutes />} /> */}
            <Route path="/home" element={<Dashboard />} />
            <Route path="/topics" element={<TopicsBoard />} />
            <Route path="/discover" element={<DiscoverBoard />} />
        </Routes>
    );
};

export default PublicRoutes;