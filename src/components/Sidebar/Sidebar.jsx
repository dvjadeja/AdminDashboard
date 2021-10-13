import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import logo from "../../assests/logo/webscript.png";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
  BsNewspaper,
} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlineTransaction } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import user from "../../assests/user1.JPG";
import MenuItem from "./MenuItem";
import { Container } from "react-bootstrap";

const menuItems = [
  { name: "Dashboard", exact: true, to: "/", icon: AiOutlineDashboard },
  {
    name: "Masters",
    to: "",
    subMenus: [
      { name: "Ledgers", to: "/masters/ledgers" },
      { name: "Inventory", to: "/masters/inventory" },
    ],
    icon: BsNewspaper,
  },
  {
    name: "Transaction",
    to: "",
    subMenus: [
      { name: "Sales", to: "/sales/export" },
      { name: "Purchase", to: "/transaction/purchase" },
      { name: "Sale Payments", to: "/transaction/salespayment" },
      { name: "Purchase Payment", to: "/transaction/purchasepayment" },
    ],
    icon: AiOutlineTransaction,
  },
  { name: "Reports", to: "/reports", icon: GoGraph },
  {
    name: "Settings",
    to: "",
    subMenus: [
      { name: "Change Password", to: "/setting/changePassword" },
      { name: "Logout", to: "/login" },
    ],
    icon: BsNewspaper,
  },
];

const Sidebar = (props) => {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (inactive) {
      document
        .querySelectorAll(".sub-menu")
        .forEach((el) => el.classList.remove("active"));
    }
    props.onCollapse(inactive);
  }, [inactive, props]);
  return (
    <>
      <Container fluid>
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
          <div className="top-section">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div
              className="toggle-menu-btn"
              onClick={() => setInactive(!inactive)}
            >
              {inactive ? (
                <BsFillArrowRightSquareFill />
              ) : (
                <BsFillArrowLeftSquareFill />
              )}
            </div>
          </div>
          <div className="search-controller">
            <button className="search-btn">
              <BiSearch />
            </button>
            <input type="text" placeholder="Search" />
          </div>
          <div className="divider"></div>
          <div className="main-menu">
            <ul className="p-0">
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  name={menuItem.name}
                  exact={menuItem.exact}
                  to={menuItem.to}
                  subMenus={menuItem.subMenus || []}
                  icon={menuItem.icon}
                  onClick={() => {
                    if (inactive) {
                      setInactive(false);
                    }
                  }}
                />
              ))}
            </ul>
          </div>

          <div className="side-menu-footer">
            <div className="avatar">
              <img src={user} alt="user" />
            </div>
            <div className="user-info">
              <h5>Dilipsinh Jadeja</h5>
              <p>dilipsinhjadeja26@gmail.com</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
