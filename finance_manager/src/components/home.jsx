import React from 'react';
import { Link } from 'react-router-dom';
import AppLayout from './Sidebar/AppLayout';

const Home = () => {
    const links = [
        { path: "/login", label: "Login" },
        { path: "/signup", label: "Sign Up" },
        { path: "/dashboard", label: "Dashboard" },
        { path: "/details", label: "Details" },
        { path: "/detailsTwo", label: "Details Two" },
        { path: "/Detailspf", label: "Details Three" },
        { path: "/Investment", label: "Investment" },
        { path: "/Income", label: "Income" },
        { path: "/Report", label: "Report" },
        { path: "/Landingpage", label: "Landing Page" },
        { path: "/savings", label: "Savings" },
        { path: "/spendings", label: "Spendings" },
        { path: "/Loan_page", label: "Expenses" },
        { path: "/Chatbot", label: "Chatbot" },
        { path: "/Taxpage", label: "Tax Page" },
        { path: "/BudgetPlanningTools", label: "Budget" },
    ];

    return (
        <AppLayout>
            <div className="min-h-screen bg-secondary p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-primary mb-8 text-center">Arthaniti</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="block bg-white hover:bg-primary hover:text-white text-primary font-semibold py-3 px-4 rounded-lg shadow-md transition-all transform hover:scale-105 text-center"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;