import "./nav.style.scss";
import Button from "../Button";
import CircleButton from "../Button-with-circle";
const Nav = () => {
  return (
    <div className="navMenu">
      <div className="navMenu__left">
        <CircleButton primary text="ARAMA MOTORLU NASIL CALISIR?" />
        <CircleButton primary text="ARAMA MOTORLU NASIL CALISIR?" />
        <CircleButton primary text="ARAMA MOTORLU NASIL CALISIR?" />
      </div>
      <div className="navMenu__right">
        <Button secondary text="e-düğün nedir?" />
        <Button secondary text="Avantajlar-Fırsatlar" />
        <Button primary text="Sektörün İlkleri" />
      </div>
    </div>
  );
};
export default Nav;
