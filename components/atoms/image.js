export default function image({
  image,
  background,
  height,
  width,
  size,
  repeat,
  position,
  imageWidth
}) {
  return (
    <div
      style={{
        height: height,
        width:imageWidth,
        background: `url(${image})`,
        backgroundSize: size,
        backgroundRepeat: repeat,
        backgroundPosition: position,
      }}
    ></div>
  );
}
