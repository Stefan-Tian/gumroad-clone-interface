export const BASE_API_URL =
  import.meta.env.VITE_REACT_APP_ENV === 'production'
    ? 'https://api-gumroad-cone.stefantien.engineer/api/v1'
    : 'http://localhost:3000/api/v1';
