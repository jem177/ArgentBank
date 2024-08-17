import Button from "../../components/Button";
import "./style.css";

export default function Login() {
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label>Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label>Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>
            <Button className="sign-in-button">Sign In</Button>
          </form>
        </section>
      </main>
    </>
  );
}
