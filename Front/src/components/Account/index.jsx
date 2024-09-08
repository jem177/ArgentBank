import Button from "../Button";
import "./style.css";

const Account = ({ title, amount, desc }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{desc}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button btnText="View transactions" className="transaction-button" />
      </div>
    </section>
  );
};

export default Account;
