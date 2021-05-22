import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, news, howToPlay, shop, lore, banlist, database, skills } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* {
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </Nav.Link>
          } */}
          {news.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#news"}
            >
              News
            </Nav.Link>
          )}
          {howToPlay.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#how-to-play"}
            >
              How to Play
            </Nav.Link>
          )}
          {shop.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#shop"}
            >
              Shop
            </Nav.Link>
          )}
          {lore.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#lore"}
            >
              Lore
            </Nav.Link>
          )}
          {banlist.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#banlist"}
            >
              Banlist
            </Nav.Link>
          )}
          {database.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#database"}
            >
              Database
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
