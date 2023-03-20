import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navigation.scss";

const Navigation = ({ menu }) => {
  const location = useLocation();

  useEffect(() => {
    const menuItem = menu.find((item) => {
      return item.path === location.pathname;
    });
    console.log(menuItem);
    if (menuItem) {
      document.title = menuItem.title;
    }
  }, [location]);
  return (
    <div className="header">
      {menu.map((item) => (
        <Link
          to={item.path}
          className={`link ${
            item.path === location.pathname
              ? "link-active"
              : ""
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
