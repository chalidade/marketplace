export default function button({
  customClass,
  background,
  color,
  margin,
  border,
  value,
  padding,
  radius
}) {
  return (
    <button
      className={customClass}
      style={{
        background: background ? background : "#0086CF",
        color: color,
        margin: margin,
        border: border ? border : "none",
        borderRadius:radius ? radius : "5px",
        padding:padding ? padding : "10px 20px"
      }}
    >
      {value}
    </button>
  );
}
