import Icon from "../Icon/Icon";
import "./Info.scss";

function Info({ title, text, icon, color }) {
  return (
    <div className="info">
      <Icon image={icon} alt={title} type="square" color={color} size="xs" />
      <div className="info__body">
        <span className="info__text">{text}</span>
        <h3 className="info__title">{title}</h3>
      </div>
    </div>
  );
}

export default Info;
