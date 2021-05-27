import AtomParagraph from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import { useState } from "react";
import MoleculeProduct from "../components/molecules/product_list";
import OrganismsNav from "../components/organisms/nav";
import { list_product, listCart } from "../components/variables/list_product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button, Toast } from "react-bootstrap";
import Link from "next/link";

export default function test() {
  let products = list_product();
  const [show, setShow] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const [showName, setShowName] = useState("");

  // Add to Cart belum jadi Video
  const [cart, setCart] = useState([]);
  const handleAddCart = (e) => {
    let check = listCart.filter((product) => product.id == e.target.id);
    let product = {
      id: e.target.id,
      title: e.target.name,
      qty: 1,
    };

    if (check.length == 0) {
      listCart.push(product);
      setShow(true);
    } else {
      listCart.map((product) => {
        if (product.id == e.target.id) {
          setShow(false);
          setShowFailed(true);
        }
      });
    }

    setShowName(e.target.name);
  };
  // End to Cart belum jadi Video

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );

  return (
    <>
      <OrganismsNav />
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        style={{
          position: "absolute",
          right: "0px",
          background: "#1DD200",
          color: "#FFF",
          margin: "20px",
        }}
        autohide
      >
        <Toast.Body>
          <img className="mr-2" src="/homepage/check_logo.svg" /> Success Add
          {showName} To Cart
        </Toast.Body>
      </Toast>

      <Toast
        onClose={() => setShowFailed(false)}
        show={showFailed}
        delay={3000}
        style={{
          position: "absolute",
          right: "0px",
          background: "#D20000",
          color: "#FFF",
          margin: "20px",
        }}
        autohide
      >
        <Toast.Body>
          <img className="mr-2" src="/homepage/icon_warning.svg" />
          {showName} Already on Cart
        </Toast.Body>
      </Toast>
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
            {products.map((product, index) => {
              return (
                <>
                    <div className="col-3">
                      <MoleculeProduct
                        image={product.image[0]}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        id={product.id}
                        index={index}
                        link="/detail"
                        addCart={handleAddCart}
                      />
                    </div>
                </>
              );
            })}
          </div>
        </div>
      </center>
    </>
  );
}
