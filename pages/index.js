import AtomParagraph from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import MoleculeProduct from "../components/molecules/product_list";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function test() {
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

      <center>
        <div className="row container mt-5">
          <div className="col-md-6 text-left">
            <AtomParagraph
              value="Peduli Digital Market"
              size="36px"
              weight="bold"
              lineHeight="39px"
            />
            <AtomParagraph
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
              lineHeight="30px"
            />
            <div className="mt-5">
              <AtomButton
                value="Browse All Products"
                background="#0086CF"
                color="#FFF"
                padding="10px 50px 10px 20px"
                border="none"
                radius="10px"
              />
              <AtomButton
                customClass="ml-3"
                value="Follow This Board"
                background="#F0F0F0"
                color="#787878"
                padding="10px 50px 10px 20px"
                border="none"
                radius="10px"
              />
            </div>
          </div>
          <div className="col-md-6">
            <img src="/homepage/beranda_img.svg" />
          </div>
        </div>

        <div
          className="mt-5"
          style={{ width: "100%", background: "#F9F9F9", height: "512px" }}
        >
          <div className="row container pt-5">
            <div className="col-12 text-left">
              <AtomParagraph
                value="Forever bag"
                weight="bold"
                size="24px"
                lineHeight="30px"
              />
            </div>
            <div className="col-3">
              <MoleculeProduct
                image="/products/product_1.svg"
                title="Lavonte"
                price="$55.00"
                category="Forever Shoes"
              />
            </div>
            <div className="col-3">
              <MoleculeProduct
                image="/products/product_2.svg"
                title="Lavonte"
                price="$25.00"
                category="Forever Shoes"
              />
            </div>
            <div className="col-3">
              <MoleculeProduct
                image="/products/product_3.svg"
                title="Lavonte"
                price="$55.00"
                category="Forever Shoes"
              />
            </div>
            <div className="col-3">
              <MoleculeProduct
                image="/products/product_4.svg"
                title="Lavonte"
                price="$55.00"
                category="Forever Shoes"
              />
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
