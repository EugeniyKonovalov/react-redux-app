import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HOME_ROUTE, NEW_POST } from "../../utils/router-constants";
import { useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { uiAction } from "../../store/uiSlice";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const onShowModalhandler = () => dispatch(uiAction.onToggleModal());

  return (
    <header className={`container ${classes.header}`}>
      <nav>
        <NavLink to={HOME_ROUTE} className={classes.logo}>
          Test App
        </NavLink>
        <NavLink to={HOME_ROUTE} className={classes["home-link"]}>
          Home
        </NavLink>
      </nav>
      <NavLink to={NEW_POST} className="link-button">
        {location.pathname.includes("posts") && (
          <button className="button" onClick={onShowModalhandler}>
            Add new
          </button>
        )}
      </NavLink>
    </header>
  );
};

export default Header;
