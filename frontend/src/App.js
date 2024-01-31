import React from "react";
import "../src/Assets/Styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Assets/Pages/screens/Dashboard";
import Login from "./Assets/Pages/screens/Login";
import TransactionReports from "./Assets/Pages/screens/Y8TransactionReports";
import TempReports from "./Assets/Pages/screens/Y9TempReports";
import TempUOR from "./Assets/Pages/screens/Y10Uor";
import TempCOR from "./Assets/Pages/screens/Y11TempCor";
import PayoutReport from "./Assets/Pages/screens/Y12PayReport";
import Signup from "./Assets/Pages/screens/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactionreport" element={<TransactionReports />} />
          <Route path="/tempreport" element={<TempReports />} />
          <Route path="/tempuniqueorderreport" element={<TempUOR />} />
          <Route path="/tempcommonorderreport" element={<TempCOR />} />
          <Route path="/payoutreport" element={<PayoutReport />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
