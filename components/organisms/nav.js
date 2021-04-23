import { Navbar, Nav, Form, FormControl, Button, Toast } from "react-bootstrap";
export default function nav() {
  return (
    <>
      <Navbar variant="light" style={{ background: "#0086CF" }}>
        <Navbar.Brand href="#home">
          <img src="/homepage/nav_logo.svg" />
        </Navbar.Brand>
        <Nav className="mr-auto text-light">
          <Nav.Link className="text-light" href="#home">
            Trends
          </Nav.Link>
          <Nav.Link className="text-light" href="#features">
            Explore
          </Nav.Link>
          <Nav.Link className="text-light" href="#pricing">
            Collection
          </Nav.Link>
          <Nav.Link className="text-light" href="#pricing">
            About Us
          </Nav.Link>
        </Nav>
        <Form inline>
          <img className="mr-3" src="/homepage/user_logo.svg" />
          <img className="mr-3" src="/homepage/cart_logo.svg" />
        </Form>
      </Navbar>
    </>
  );
}
