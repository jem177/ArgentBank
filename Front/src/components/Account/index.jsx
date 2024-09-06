import Button from "../Button";
import "./style.css";

export const Account = ({ props }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.desc}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button btnText="View transactions" className="transaction-button" />
      </div>
    </section>
  );
};
