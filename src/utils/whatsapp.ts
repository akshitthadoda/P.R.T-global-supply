export const WHATSAPP_NUMBER_DISPLAY = "+91 63533 19802";
export const WHATSAPP_PHONE_RAW = "916353319802";

export const getWhatsAppUrl = (productName?: string, customText?: string) => {
  if (customText) {
    return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(customText)}`;
  }

  if (!productName) {
    const generalMessage = "Hello PRT Global Supply, I would like to enquire about your industrial materials.";
    return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(generalMessage)}`;
  }

  const message = `Hello PRT Global Supply, I am interested in ${productName}. Please share the available grades, specifications, applications and packaging information.`;

  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(message)}`;
};

