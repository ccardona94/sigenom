import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import {Login} from "../Pages/Login";
// Pages
import { Protected } from "./Protected.routes";
import Home from '../Pages/Home'
import { ProfileContextProvider } from "../Context/Profile.context";

export default function App() {
  return (
    <ProfileContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Protected/>}>
            <Route path="/" element={<Home/>} />
          </Route>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </ProfileContextProvider>
  );
}
