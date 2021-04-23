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
        background: background,
        color: color,
        margin: margin,
        border: border,
        borderRadius:radius,
        padding:padding
      }}
    >
      {value}
    </button>
  );
}
