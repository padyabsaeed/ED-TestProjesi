import "./steps.style.scss";
import Button from "../Button";
import Item from "./steps.item";
import data from "./data";
const Steps = () => {
  return (
    <div className="steps">
      {data?.map((item) => (
        <Item key={item.id} data={item} />
      ))}
      <Button secondary text="HEMEN ÜYE OL (Ücretsiz)" />
    </div>
  );
};
export default Steps;
