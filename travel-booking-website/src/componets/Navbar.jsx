import { Container, Nav, Navbar } from 'react-bootstrap';



function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fs-2'>Travelo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='fs-5'>Home</Nav.Link>
            <Nav.Link href="#About" className='fs-5'>About</Nav.Link>
            <Nav.Link href="#Tour" className='fs-5'>Tour</Nav.Link>
            <Nav.Link href="#Login" className='fs-5'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>  
      </Container>  
    </Navbar>
  );
}

export default BasicExample;    