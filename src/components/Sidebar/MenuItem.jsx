import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineDashboard, AiOutlineTransaction } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, icon, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);
  return (
    <li onClick={onClick}>
      <NavLink
        exact={exact}
        className="menu-item"
        onClick={() => setExpand(!expand)}
        to={to}
      >
        <div className="menu-icon">
          {icon === AiOutlineDashboard ? <AiOutlineDashboard /> : ""}
          {icon === AiOutlineTransaction ? <AiOutlineTransaction /> : ""}
          {icon === BsNewspaper ? <BsNewspaper /> : ""}
          {icon === GoGraph ? <GoGraph /> : ""}
        </div>
        <span>{name}</span>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
