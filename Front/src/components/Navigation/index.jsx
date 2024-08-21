import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "../../store/loginSlice";
import "./style.css";

const Navigation = () => {
  const dispatch = useDispatch();
  const { userToken: token, userProfil } = useSelector((state) => state.login);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };

  const userName = userProfil?.userName;

  return (
    <>
      {userName && (
        <Link to="/user" className="userName">
          <i className="fa fa-user-circle"></i>
          <p>{userName}</p>
        </Link>
      )}
      {token ? (
        <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
          Sign Out
        </NavLink>
      ) : (
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
