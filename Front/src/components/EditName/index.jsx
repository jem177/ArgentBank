import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUsername } from "../../services/api";
import { infoUserName } from "../../store/loginSlice";
import Button from "../Button";

const EditName = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userProfil, userToken } = useSelector((state) => state.login);
  const { firstName, lastName, userName } = userProfil;

  const [newUserName, setNewUserName] = useState(userName);

  useEffect(() => {
    setNewUserName(userName);
  }, [userName]);

  const handleChangeUserName = (e) => setNewUserName(e.target.value);

  const handleCancel = () => navigate("/user");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await changeUsername(newUserName, userToken);
      if (response.status === 200) {
        dispatch(infoUserName(newUserName));
        console.log("Le nom d'utilisateur a bien été modifié.");
        navigate("/user");
      } else {
        console.error("La mise à jour du nom d'utilisateur a échoué.");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content toggle-edit-name">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit User Info</h1>
        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              value={newUserName}
              onChange={handleChangeUserName}
              type="text"
              id="username"
              placeholder="Tapez votre username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" disabled value={firstName} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" disabled value={lastName} />
          </div>
          <Button btnText="Save" className="sign-in-button" />
        </form>
        <Button
          btnText="Cancel"
          onClick={handleCancel}
          className="sign-in-button"
        />
      </section>
    </main>
  );
};

export default EditName;
