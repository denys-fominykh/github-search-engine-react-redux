export const getUserAccount = (payload) => ({
  type: 'GET_USERNAME_ACCOUNT',
  payload,
});

export const resetUserAccount = () => ({
  type: 'RESET_USERNAME_ACCOUNT',
});
