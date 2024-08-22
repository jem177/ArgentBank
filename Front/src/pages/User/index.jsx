import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./style.css";

export default function User() {
  const username = useSelector((state) => state.login.userProfil.userName);
  const navigate = useNavigate();

  // Gestion de l'affichage du formulaire pour modifier le username
  const handleDisplayEdit = (e) => {
    e.preventDefault();
    navigate("/editUser");
  };

  return (
    <>
      <main className="main bg-dark">
        <header className="header">
          <h1>
            Welcome back
            <br />
            {username}!
          </h1>
          <Button
            className="edit-button"
            btnText="Edit Name"
            onClick={handleDisplayEdit}
          />
        </header>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Button
              btnText="View transactions"
              className="transaction-button"
            />
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Button
              btnText="View transactions"
              className="transaction-button"
            />
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <Button
              btnText="View transactions"
              className="transaction-button"
            />
          </div>
        </section>
      </main>
    </>
  );
}
