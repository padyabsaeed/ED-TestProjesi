import Img1 from "../../assets/images/img1.png";
import "./how.style.scss";
const HowImageBox = () => {
  return (
    <div className="howTo__imgBox">
      <img src={Img1} />
      <div className="playBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86.933"
          height="86.933"
          viewBox="0 0 86.933 86.933"
        >
          <g
            id="Group_241"
            data-name="Group 241"
            transform="translate(4178.106 -462.033)"
          >
            <circle
              id="Ellipse_26"
              data-name="Ellipse 26"
              cx="42.967"
              cy="42.967"
              r="42.967"
              transform="translate(-4177.606 462.533)"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <path
              id="Path_347"
              data-name="Path 347"
              d="M-4114.737,505.5l-32.332-18.667v37.333Z"
              fill="#fff"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default HowImageBox;
