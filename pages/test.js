import AtomParagraph from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function test() {
  return (
    <>
      <div className="row p-5">
        <div className="col-md-6">
          <AtomParagraph size="48px" value="Apa itu apple ?" weight="800" />
          <AtomParagraph
            size="16px"
            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <AtomButton customClass="mt-4 mr-3" color="#FFF" value="Browse All Product" />
          <AtomButton customClass="mt-4 mr-3" background="#F0F0F0" value="Follow This Board" />

        </div>
        <div className="col-md-6">
          <h1
            className="mt-2 mb-3"
            style={{ fontWeight: "800", fontSize: "48px" }}
          >
            Apa itu apple ?
          </h1>
          <p className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
          </p>
          <button
            className="mt-4 mr-3"
            style={{
              background: "#0086CF",
              color: "#FFF",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
            }}
          >
            Browse All Product
          </button>
          <button
            className="mt-4 mr-3"
            style={{
              background: "#F0F0F0",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
            }}
          >
            Follow This Board
          </button>
        </div>
      </div>
    </>
  );
}
