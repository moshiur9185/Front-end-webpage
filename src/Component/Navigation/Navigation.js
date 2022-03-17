import React from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";


const Navigation = (props) => {

  const { user, handleSignOut } = useFirebase()
  return (
    <div className="sticky-top">
      <Navbar className="navigation " expand="lg">
        <Container>
          <Navbar.Brand className="logo fst-italic" href="/">MR. Mart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-auto navbar">
              <Nav.Link data-replace="Home" className="active ml-4 nav mt-2" href="/home"><span>Home</span></Nav.Link>
              <Link data-replace="Products" className="ml-4 nav mt-2" to="/products"><span>Products</span></Link>
              <Link data-replace="Blogs" className=" ml-4 nav mt-2" to="/blogs"><span>Blogs</span></Link>
              <Link data-replace="Dashboard" className="ml-4 nav mt-2" to="/dashboard"><span>Dashboard</span></Link>
              <Link data-replace="Cart" className="ml-4 nav mt-2" to="/cart"><span><FontAwesomeIcon icon={faShoppingCart} /> {props.cart.length}</span></Link>
              {user.email ? <a href="/home"><button className="btn btn-brand ml-4 mt-2" onClick={handleSignOut}>Sing Out</button></a> : <a data-replace="Login" href="/login"><button className="btn btn-brand ml-4 mt-2">Login</button></a> }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
