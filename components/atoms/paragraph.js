export default function paragraph({
  size,
  weight,
  color,
  margin,
  customeClass,
  value,
  lineHeight
}) {
  return (
    <>
      <p
        className={customeClass}
        style={{ fontWeight:weight, lineHeight:lineHeight, fontSize: size, color: color, margin: margin }}
      >
        {value}
      </p>
    </>
  );
}
