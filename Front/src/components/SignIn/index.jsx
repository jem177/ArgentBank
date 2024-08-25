import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { getUserProfile, logUser } from "../../services/api";
import { infoUser, loginUser } from "../../store/loginSlice";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { email, password, rememberMe } = formData;
      const {
        body: { token },
      } = await logUser(email, password);

      dispatch(loginUser(token));

      if (rememberMe) {
        localStorage.setItem("token", token);
      }

      const userInfo = await getUserProfile(token);
      const userInfos = {
        email: userInfo.email,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        userName: userInfo.userName,
      };
      console.log(userInfo);

      dispatch(infoUser(userInfos));
      navigate("/user");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError("Identifiants incorrects");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="input-wrapper">
        <label htmlFor="userEmail">User Email</label>
        <input
          type="email"
          id="userEmail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="exemple@gmail.com"
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button btnText="Sign In" className="sign-in-button" />
      {error && <p className="errorConexion">{error}</p>}
    </form>
  );
};

export default SignInForm;
