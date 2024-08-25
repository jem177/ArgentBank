import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./pages/Error/index.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import SecurityRoutes from "./SecurityRoutes.jsx";

export default function App() {
  const isLoggedIn = useSelector((state) => state.login.userProfil);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/user" replace /> : <Login />}
          />
          <Route element={<SecurityRoutes />}>
            <Route path="/user" element={<User />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
