import Button from "./Button";
import { handleContact } from "../../utils/contact";

export default function ContactButton({
  children = "Fale comigo",
  className = "",
  onClick,
  ...props
}) {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (!event.defaultPrevented) {
      handleContact();
    }
  };

  return (
    <Button
      type="button"
      className={`contact-btn ${className}`.trim()}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}
