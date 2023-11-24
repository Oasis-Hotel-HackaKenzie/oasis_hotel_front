import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { HomePage } from "../pages/home";
import { RoomDetailPage } from "../pages/room";
import { RoomPage } from "../pages/roomPage";
import { PageAttendant } from "../pages/attendant";
import { PageManager } from "../pages/manager";
import { PageGuest } from "../pages/guest";


export const RoutesMain = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/roompagedetail" element={<RoomDetailPage />} />
        <Route path="/roompage" element={<RoomPage />} />
        <Route path="/attendantpage" element={<PageAttendant />} />
        <Route path="/managerpage" element={<PageManager />} />
        <Route path="/guestpage" element={<PageGuest />} />



        




    </Routes>
    )}