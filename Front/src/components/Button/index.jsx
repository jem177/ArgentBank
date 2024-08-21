import "./style.css";

const Button = ({ onClick, btnText, className = "" }) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {btnText}
    </button>
  );
};
export default Button;
