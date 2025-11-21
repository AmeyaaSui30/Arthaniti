import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/signup/signup.jsx";    
import Home from "./components/home.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import Detailpg from "./components/details/Detailpg.jsx";
import DetailpgTwo from "./components/details/DetailpgTwo.jsx";
import Detailspf from "./components/details/detailspf.jsx";
import Investment from "./components/investment/Investment.jsx";
import Income from "./components/Income/Income.jsx";
import Report from "./components/Report/Report.jsx";
import LandingPage from "./components/Landingpage/Landingpage.jsx";
import Saving from "./components/savings/Saving.jsx";
import Spending from "./components/spendings/Spending.jsx";
import Loan_page from "./components/loans/Loan_page.jsx";
import Chatbot from "./components/gimini/Chatbot.jsx";
import TaxPage from "./components/tax/TaxPage.jsx";
import BudgetPlanningTools from "./components/buget/BudgetPlanningTools.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/Details" element={<Detailpg />} />
                <Route path="/DetailsTwo" element={<DetailpgTwo />} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/Detailspf" element={<Detailspf />} />
                <Route path="/Investment" element={<Investment />} />
                <Route path="/Income" element={<Income />} />
                <Route path="/Report" element={<Report />} />
                <Route path="/LandingPage" element={<LandingPage/>} /> 
                <Route path="/savings" element={<Saving/>}  />
                <Route path="/spendings" element={<Spending/>} />
                <Route path="/Loan_page" element={<Loan_page/>} />
                <Route path="/Chatbot" element={<Chatbot />} />
                <Route path="/Taxpage" element={<TaxPage />} />
                <Route path="/BudgetPlanningTools" element={<BudgetPlanningTools />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;