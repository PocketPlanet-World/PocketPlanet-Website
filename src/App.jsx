import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data/Data';
import Notfound from './pages/Notfound';
import About from './pages/About';
import Control from './pages/Control';

export default function App() {

  const local = useLocation();

  switch (local.pathname) {
    case "/":
      document.title = '微型世界 | 首頁';
      break;
    case "/home":
      document.title = '微型世界 | 首頁';
      break;
    case "/data":
      document.title = '微型世界 | 即時數據';
      break;
    case "/about":
      document.title = '微型世界 | 關於';
      break;
    case "/control":
      document.title = '微型世界 | 控制台';
      break;
    case "notfound":
      document.title = '微型世界 | 迷失';
      break;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/about" element={<About />} />
        <Route path="/control" element={<Control />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route path="notfound" element={<Notfound />} />
      </Routes>
    </>
  )
}