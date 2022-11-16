import { Routes, Route, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Element/>} />
  
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }