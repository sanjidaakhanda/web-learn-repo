import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FaLaptopHouse, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Button } from "react-bootstrap";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-4"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand className="fs-2">
            <Link to={"/home"}>
              <FaLaptopHouse></FaLaptopHouse> Web Learn
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/home"}>Courses</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/blog"}> Blog</Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-primary">
                FAQ
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {user?.photoURL2 ? (
                  <Image
                    style={{ height: "40px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span> {user?.displayName}</span>
                    <Button className="mx-2" onClick={handleLogOut}>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="mx-4">
                      Login
                    </Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
