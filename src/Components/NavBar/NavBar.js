import React from "react";
import "./navBar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../assets/logo4.png";
import Button from "react-bootstrap/Button";
import MenuIcon from "@mui/icons-material/Menu";
function NavBar() {
  return (
    <div className="navBar">
      <div className="dflex">
        <img src={logo} />
        <div>
          <Button className="loginButton" variant="outline-secondary">
            Login
          </Button>
          <Button variant="outline-secondary">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
