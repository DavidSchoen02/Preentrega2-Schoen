import React from "react";
import CartWidget from "./CartWidget";
import { Nav, NavLink, Navbar } from "react-bootstrap";

const NavBar = () => {
  const opcionesNav = ["Nosotros", "Productos", "Contacto"];

  return (
    <>
      <Navbar flex>
        <Nav className="mx-auto">
          <ul className="d-flex">
            {opcionesNav.map((opcion) => (
              <NavLink key={opcion}>{opcion}</NavLink>
            ))}
          </ul>
        </Nav>
        <CartWidget />
      </Navbar>
    </>
  );
};

export default NavBar;
