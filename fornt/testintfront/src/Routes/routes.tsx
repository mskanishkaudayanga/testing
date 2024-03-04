import { Route, Routes } from "react-router-dom";
import React from "react";
import App from "../App";
import PaymentModal from "../new";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
