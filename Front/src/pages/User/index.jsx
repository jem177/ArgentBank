import { useState } from "react";
import { useSelector } from "react-redux";
import Account from "../../components/Account";
import Button from "../../components/Button";
import EditNameModal from "../../components/EditName";
import "./style.css";

export default function User() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const firstName = useSelector((state) => state.login.userProfil.firstName);
  const lastName = useSelector((state) => state.login.userProfil.lastName);

  const handleDisplayEdit = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  return (
    <>
      <main className="main bg-dark">
        <header className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName} !
          </h1>
          <Button
            className="edit-button"
            btnText="Edit Name"
            onClick={handleDisplayEdit}
          />
        </header>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          desc="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712"
          amount="$10,928.42"
          desc="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          desc="Current Balance"
        />
        <EditNameModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
        />
      </main>
    </>
  );
}
