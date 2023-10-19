import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css"
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar  className="bg-body-tertiary nav">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="Link">Home</Link>
          <Link to="/About" className="Link">lab1</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
