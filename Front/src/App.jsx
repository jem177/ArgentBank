import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SecurityRoutes from "./SecurityRoutes.jsx";
import Error from "./pages/Error/index.jsx";

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
            {/* <Route path="/editUser" element={<EditName />} /> */}
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
