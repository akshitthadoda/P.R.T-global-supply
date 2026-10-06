export const OFFICIAL_EMAIL = "prtsupplier@gmail.com";

export const getEmailMailtoUrl = (productName?: string, customSubject?: string, customBody?: string) => {
  if (customSubject && customBody) {
    return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(customSubject)}&body=${encodeURIComponent(customBody)}`;
  }

  if (!productName) {
    const subject = "General Inquiry - PRT Global Supply";
    const body = "Hello PRT Global Supply,\n\nI would like to inquire about your industrial raw materials and supply chain services.\n\nThank you.";
    return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const subject = `Product Information Inquiry - ${productName}`;
  const body = `Hello PRT Global Supply,\n\nI would like to know more about ${productName}.\n\nPlease share the available grades, technical specifications, applications and packaging information.\n\nThank you.`;

  return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const getTechnicalInfoEmailUrl = (productName: string, docType = "TDS / SDS") => {
  const subject = `Technical Information Request - ${productName}`;
  const body = `Hello PRT Global Supply Technical Team,\n\nPlease provide technical documentation (${docType}) for ${productName}.\n\nRequirements / Application details:\n\nCompany Name:\nContact Person:\n\nThank you.`;
  return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

