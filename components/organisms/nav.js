import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Toast,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import AtomParagraph from "../atoms/paragraph";
import AtomImage from "../atoms/image";
import { list_product, listCart } from "../variables/list_product";

export default function nav() {
  let products = list_product();
  const handleDeleteCart = (e) => {
    let filterCart = listCart.filter((cart) => cart.id !== e.target.id);
    console.log(listCart);
  };

  const popover = (
    <Popover id="popover-basic" style={{ width: "500px" }}>
      <Popover.Content>
        <AtomParagraph value="Cart" weight="bold" size="18px" />
        <table width="100%">
          {listCart.length !== 0
            ? listCart.map((cart, index) => {
                return (
                  <>
                    <tr>
                      <td width="20%" style={{ verticalAlign: "top" }}>
                        <AtomImage
                          image={products[cart.id].image[0]}
                          background="#dedede"
                          height="40px"
                          imageWidth="40px"
                          size="contain"
                          repeat="no-repeat"
                          position="center"
                          padding="10px"
                        />
                      </td>
                      <td width="70%">
                        <AtomParagraph
                          value={products[cart.id].title}
                          size="14px"
                        />
                        <AtomParagraph
                          value={products[cart.id].price}
                          margin="-15px 0px 20px 0px"
                          size="16px"
                          weight="bold"
                        />
                      </td>
                      <td width="10%" style={{ verticalAlign: "middle" }}>
                        {/*<img onClick={handleDeleteCart} id={cart.id} src="/homepage/trash_icon.svg" />*/}
                      </td>
                    </tr>
                  </>
                );
              })
            : "Empty Cart"}
        </table>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <Navbar
        variant="light"
        style={{ background: "#0086CF", padding: "10px 40px" }}
      >
        <Navbar.Brand href="#home">
          <Link href="/">
            <img src="/homepage/nav_logo.svg" />
          </Link>
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
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <img className="mr-4" src="/homepage/user_logo.svg" />
          </OverlayTrigger>
          <img className="mr-4" src="/homepage/cart_logo.svg" />
        </Form>
      </Navbar>
    </>
  );
}
