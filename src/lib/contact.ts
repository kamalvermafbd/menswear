export const WHATSAPP_NUMBER = "919999999999";
export const PHONE_DISPLAY = "+91 99999 99999";
export const INSTAGRAM_HANDLE = "menswear";
export const BRAND_NAME = "Menswear";
export const OWNER_NAME = "Ravi";
export const LOCATION = "Ludhiana, Punjab";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
