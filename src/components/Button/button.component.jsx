import "./button.style.scss";
const Button = ({ primary, secondary, text, ...rest }) => {
  return (
    <button
      className={`btn ${primary ? "primary" : ""} ${
        secondary ? "secondary" : ""
      }`}
      {...rest}
    >
      {text}
    </button>
  );
};
export default Button;
