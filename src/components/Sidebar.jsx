import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ links, close }) {
  const location = useLocation();
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <Link
          className={
            location.pathname === link.path
              ? "sidebar-link active"
              : "sidebar-link"
          }
          //  className="sidebar-link"
          to={link.path}
          key={link.name}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
