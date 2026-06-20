/**
 * @fileOverview Konfigurasi Cloudinary Desa Digital.
 */

export const CLOUDINARY_CONFIG = {
  cloudName: "dhltjjda0",
  uploadPreset: "desa_digital_preset", 
  apiKey: "957954734583989",
  baseUrl: "https://api.cloudinary.com/v1_1/dhltjjda0/image/upload"
};

/**
 * Utilitas untuk mengoptimalkan URL Cloudinary secara otomatis.
 */
export const getOptimizedCloudinaryUrl = (url: string) => {
  if (!url || !url.includes("cloudinary.com")) return url;
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};
