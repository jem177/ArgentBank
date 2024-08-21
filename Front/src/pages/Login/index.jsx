import SignIn from "../../components/SignIn";
import "./style.css";

const Login = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignIn />
      </section>
    </main>
  );
};

export default Login;
