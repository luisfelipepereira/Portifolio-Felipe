export default function Card({
  as = "div",
  className = "",
  glow = false,
  children,
  ...props
}) {
  const Tag = as;
  const classes = ["card", glow ? "card-glow" : "", className].join(" ").trim();

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
