export const WHATSAPP_NUMBER = "918968956553";
export const PHONE_DISPLAY = "+91 89689 56553";
export const INSTAGRAM_HANDLE = "rk.thukral";
export const BRAND_NAME = "RK Thukral";
export const OWNER_NAME = "Shivam Thukral";
export const LOCATION = "Ludhiana, Punjab";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
