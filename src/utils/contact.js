export const CONTACT_MESSAGE =
  "Ol%C3%A1%20Luiz%20Felipe!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

export const CONTACT_WHATSAPP_URL = `https://wa.me/5535910213596?text=${CONTACT_MESSAGE}`;

export const handleContact = () => {
  if (typeof window !== "undefined") {
    window.open(CONTACT_WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }
};
