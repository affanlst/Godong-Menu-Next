const api_url = "https://godong-menu-laravel-production.up.railway.app/api";


export const API_ENDPOINTS = {
  CATEGORIES: `${api_url}/categories`,
  DELETE_CATEGORY: (id: string) => `${api_url}/categories/${id}`,
  CONTACT: `${api_url}/contact`,
  STATISTICS: `${api_url}/statistics`,
  TRANSAKSI_DATE_RANGE: `${api_url}/transaksi-date-range`,
  MENU_ITEMS: `${api_url}/menu-items`,
  DELETE_MENU_ITEM: (kode_menu: string) =>
    `${api_url}/menu-items/${kode_menu}`,
  CATEGORY_MENU_ITEMS: (categoryId: string) => `${api_url}/categories/${categoryId}/menu-items`,
  DELETE_CONTACT: (id: string) => `${api_url}/contact/${id}`,
  ALL_TRANSAKSI: `${api_url}/alltransaksi`,
  GET_USER: `${api_url}/getUser`,
  DELETE_USER: (id: string) => `${api_url}/deleteuser/${id}`,
  USER: (email: string) => `${api_url}/user/${email}`,
  TRANSAKSI_WITH_DETAILS: (userId: string, start?: string) =>
    `${api_url}/transaksi/${userId}/with-details${
      start ? `?start_date=${start}` : ""
    }`,
  TRANSAKSI: `${api_url}/transaksi`,
  UPLOAD_PROFILE_PICTURE: `${api_url}/upload-profile-picture`,
  LOGIN: `${api_url}/login`,
  REGISTER: `${api_url}/register`,
  ADD_CATEGORY: `${api_url}/categoriesAdd`,
  EDIT_CATEGORY: `${api_url}/editcategories`,
  EDIT_MENU: `${api_url}/editmenu`,
};