import { Routes, Route } from "react-router-dom";
import { ContactUs } from "./pages/ContactUs";
import { Facilities } from "./pages/Facilities";

import {Home}  from './pages/Home';
import { Rooms } from "./pages/Rooms";

export function Routin() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Facilities" element={<Facilities />} />
      <Route path="/Rooms" element={<Rooms />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
}