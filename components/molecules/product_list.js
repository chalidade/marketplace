import AtomParagraph from "../atoms/paragraph";
import AtomImage from "../atoms/image";

export default function product_list({ image, title, price, category, id }) {
  return (
    <>
      <div
        className="mt-3 text-left templateListProduct"
        style={{ padding: "20px" }}
      >
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
        <div className="row">
          <div className="col-8">
            <AtomParagraph value={price} size="18px" weight="bold" />
          </div>
          <div className="col-4">
            <img src="/homepage/cart_logo_black.svg" />
          </div>
        </div>
      </div>
    </>
  );
}
