import AtomParagraph from "../atoms/paragraph";
import AtomImage from "../atoms/image";
import Link from "next/link";

export default function product_list({
  image,
  title,
  price,
  category,
  id,
  index,
  addCart,
}) {
  return (
    <>
      <div
        className="mt-3 text-left templateListProduct"
        style={{ padding: "20px" }}
      >
        <Link href="/detail">
          <div>
            <AtomImage
              image={image}
              background="#dedede"
              height="150px"
              size="contain"
              repeat="no-repeat"
              position="center"
            />
            <AtomParagraph
              value={title}
              size="14px"
              weight="bold"
              margin="30px 0px 15px 0px"
            />
            <AtomParagraph
              value={category}
              size="9px"
              margin="-10px 0px 20px 0px"
            />
          </div>
        </Link>
        <div className="row">
          <div className="col-8">
            <AtomParagraph value={price} size="18px" weight="bold" />
          </div>
          <div className="col-4">
            <img
              onClick={addCart}
              id={index}
              name={title}
              src="/homepage/cart_logo_black.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
