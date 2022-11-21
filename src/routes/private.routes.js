import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Wallet from "../pages/Wallet/Wallet";
import InFlow from "../pages/InFlow/InFlow";
import OutFlow from "../pages/OutFlow/OutFlow";

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/inflow" element={<InFlow />} />
      <Route path="/outflow" element={<OutFlow />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
