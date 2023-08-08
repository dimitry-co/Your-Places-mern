import React, { useState} from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false); // We use useState() to manage state in a functional component. useState() returns an array with two elements. The first element is the current state and the second element is a function that allows us to update the state.

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };


  return (
    <React.Fragment> // React.Fragment is a built-in component that allows us to wrap multiple components without adding an extra div to the DOM.
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
      (<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
     )
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
