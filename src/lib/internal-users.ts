/**
 * @fileOverview Daftar kredensial internal untuk Portal Absensi.
 * Hanya menyertakan admin sistem utama. Personel lain dikelola via Firestore.
 */

export const INTERNAL_USERS = [
  { 
    username: "admincinangsi", 
    email: "admin@cinangsi.id", 
    password: "admin00", 
    role: "admin_absensi", 
    nama: "ADMINISTRATOR ABSENSI" 
  }
];
