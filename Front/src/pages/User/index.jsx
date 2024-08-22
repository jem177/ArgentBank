import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import EditNameModal from "../../components/EditName";
import "./style.css";

export default function User() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const username = useSelector((state) => state.login.userProfil.userName);

  const handleDisplayEdit = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  return (
    <>
      <main className="main bg-dark">
        <header className="header">
          <h1>
            Welcome back
            <br />
            {username} !
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
        <EditNameModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
        />
      </main>
    </>
  );
}
