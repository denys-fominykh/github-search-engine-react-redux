import axios from 'axios';
import { getUserAccount } from '../actions';

const _apiBase = 'https://api.github.com/users';
const _clientId = '1b9a0ab83be88a82a5b3';
const _clientSecret = 'd12903ccc4bb851b0d67ca0ead54696eeeddfb86';

const getResourceItem = (username) => (dispatch) => {
  axios
    .get(
      `${_apiBase}/${username}?client_id=${_clientId}&client_secret=${_clientSecret}`,
    )
    .then((response) => {
      if (response.status === 200) {
        dispatch(getUserAccount(response.data));
      }
    });
};

export default getResourceItem;
