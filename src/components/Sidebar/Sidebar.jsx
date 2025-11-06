import Icon from "../Icon/Icon";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <nav className="sidebar">
      <a href="#" className="sidebar__link">
        <Icon image="/assets/icons/yoga.svg" alt="Yoga" type="square" />
      </a>
      <a href="#" className="sidebar__link">
        <Icon image="/assets/icons/swimming.svg" alt="Natation" type="square" />
      </a>
      <a href="#" className="sidebar__link">
        <Icon image="/assets/icons/bike.svg" alt="Vélo" type="square" />
      </a>
      <a href="#" className="sidebar__link">
        <Icon image="/assets/icons/fitness.svg" alt="Fitness" type="square" />
      </a>
    </nav>
  );
}

export default Sidebar;
