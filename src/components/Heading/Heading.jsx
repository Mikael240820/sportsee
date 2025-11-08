import "./Heading.scss";
import { parseBoldToElements } from "../../utils/textUtils";

function Heading({ title, description = "" }) {
  return (
    <div className="heading">
      <h1 className="heading__title">{parseBoldToElements(title)}</h1>
      {description && <p className="heading__description">{description}</p>}
    </div>
  );
}

export default Heading;
