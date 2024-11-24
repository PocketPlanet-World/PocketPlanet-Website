import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Home from './pages/home/App';
import OnlineData from './pages/online_data/App';
import About from './pages/about/App';

import Nav from "./widgets/nav/App";

export default function App() {

  const [path, setPath] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname])

  useEffect(() => {
    if (path === '/' || path === '/home') {
      document.title = 'PocketPlanet';
    } else if (path === '/dashboard') {
      document.title = '即時資訊 | PocketPlanet';
    } else if (path === '/about') {
      document.title = '關於 | PocketPlanet';
    } else {
      document.title = 'PocketPlanet';
    }
  }, [path])

  return (
    <>
      <Nav router={path} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/online_data" element={<OnlineData />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}