export const checkAuthenticated = () => {
  return !!localStorage.getItem('token');
};
