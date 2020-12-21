import "./circle-button.style.scss";
const CircleButton = ({ primary, secondary, text, ...rest }) => {
  return (
    <button
      className={`circle-btn ${primary ? "primary" : ""} ${
        secondary ? "secondary" : ""
      }`}
      {...rest}
    >
      <div className="circle-btn__icon">
        <svg
          id="Component_2_1"
          data-name="Component 2 – 1"
          xmlns="http://www.w3.org/2000/svg"
          width="17.948"
          height="20.725"
          viewBox="0 0 17.948 20.725"
        >
          <path
            id="Path_1007"
            data-name="Path 1007"
            d="M96.91,179.2,78.962,168.835V189.56Z"
            transform="translate(-78.962 -168.835)"
            fill="#d40054"
          />
        </svg>
      </div>
      {text}
    </button>
  );
};
export default CircleButton;
