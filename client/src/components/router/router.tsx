import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../signin_signup/signin_signup';
import Home from '../home/home';
import Shop from '../shop/shop';
import ShopCart from '../shopcard/shopcart';

// import User from '../user/user'; // Uncomment if needed
// import Admin from '../admin/admin'; // Uncomment if needed

const PrivateRoute: React.FC<{ children: JSX.Element; role: number }> = ({ children, role }) => {
    const userRole = parseInt(localStorage.getItem('role') || '0', 10);

    // Check if the user has the required role
    if (userRole !== role) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shopcard" element={<ShopCart />} />
                <Route
                    path="/shop"
                    element={
                        <PrivateRoute role={0}>
                            <Shop />
                        </PrivateRoute>
                    }
                />
                {/* Uncomment if needed */}
                {/* <Route
                    path="/admin"
                    element={
                        <PrivateRoute role={1}>
                            <Admin />
                        </PrivateRoute>
                    }
                /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
