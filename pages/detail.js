import OrganismsNav from "../components/organisms/nav";
import AtomText from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import AtomImage from "../components/atoms/image";
import Link from "next/link";
import { list_product, listCart } from "../components/variables/list_product";

export default function detail() {
  return (
    <>
      <OrganismsNav />
      <center>
        <div className="row container mt-5">
          <div className="col">
            <AtomImage image="/products/product_2.svg" width="360px" />
            <div className="row mt-3" style={{width:"75%"}}>
              <div className="col">
                <AtomImage image="/products/product_1.svg" width="100px" height="100px" />
              </div>
              <div className="col">
                <AtomImage image="/products/product_2.svg" width="100px" height="100px"/>
              </div>
              <div className="col">
                <AtomImage image="/products/product_3.svg" width="100px" height="100px"/>
              </div>
            </div>
          </div>
          <div className="col text-left">
            <AtomText
              value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment "
              size="28px"
              weight="bold"
            />
            <AtomText value="Stock : 50" size="18px" color="9D9D9D" />
            <AtomText value="$50.00" size="36px" weight="bold" />
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
            />
            <AtomButton
              customClass="mt-5"
              value="Add to Cart"
              background="#0086CF"
              color="#FFF"
              padding="5px 30px"
              border="none"
              radius="10px"
            />
          </div>
        </div>
      </center>
    </>
  );
}
