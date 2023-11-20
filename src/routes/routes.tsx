import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { HomePage } from "../pages/home";
import { RoomDetailPage } from "../pages/room";
import { RoomPage } from "../pages/roomPage";


export const RoutesMain = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/roompagedetail" element={<RoomDetailPage />} />
        <Route path="/roompage" element={<RoomPage />} />




    </Routes>
    )}