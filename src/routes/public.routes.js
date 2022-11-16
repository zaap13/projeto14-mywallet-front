import { Routes, Route, Navigate } from "react-router-dom";

export default function PublicRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Element/>} />
  
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }