import { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

function NavbarMenu() {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <Navbar expand="lg" className="bg">
      <Container>
        <Navbar.Brand href="#home" style={{color:"white", fontSize:"25px"}}>Travelia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" style={{color:"white", fontSize:"18px"}}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="trips" style={{color:"white", fontSize:"18px"}}>
              Trips
            </Nav.Link>
            {!user ? (
              <Nav.Link as={NavLink} to="/auth" style={{color:"white", fontSize:"18px"}}>
                Login
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/myBooking" className="me-2">
                  My Bookings
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
