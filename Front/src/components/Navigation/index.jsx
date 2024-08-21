import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../store/loginSlice";

import "./style.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const loginStore = useSelector((state) => state.login);
  const token = useSelector((state) => state.login.userToken);

  const handleRedirectHome = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };
  return (
    <div className="login">
      {loginStore &&
        loginStore.userProfil &&
        loginStore.userProfil.userName && (
          <Link to="/user" className="userName">
            <i className="fa fa-user-circle"></i>
            <p>{loginStore.userProfil.userName}</p>
          </Link>
        )}
      {token ? (
        <NavLink className="main-nav-item" to="/" onClick={handleRedirectHome}>
          Sign Out
        </NavLink>
      ) : (
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
