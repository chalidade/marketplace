export default function image({
  image,
  background,
  height,
  width,
  size,
  repeat,
  position,
}) {
  return (
    <div
      style={{
        height: height,
        background: `url(${image})`,
        backgroundSize: size,
        backgroundRepeat: repeat,
        backgroundPosition: position,
      }}
    ></div>
  );
}
