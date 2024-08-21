import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SecurityRoutes = () => {
  const isAuthenticated = useSelector((state) => !!state.login.userToken);

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default SecurityRoutes;
