export default function Button({
  as,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const Tag = href ? "a" : as || "button";
  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };
  const sizes = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  const classes = [
    "btn",
    variants[variant] || variants.primary,
    sizes[size] || "",
    className,
  ]
    .join(" ")
    .trim();

  return (
    <Tag
      className={classes}
      href={href}
      type={Tag === "button" ? "button" : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
