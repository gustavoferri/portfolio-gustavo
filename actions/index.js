import axios from 'axios';
import Cookies from 'js-cookie';

import { getCookieFromReq  } from '../helpers/utils';

const setAuthHeader = () => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookie.getJSON('jwt');

    if (token) {
        return { headers: {'authorization': `Bearer ${token}`}};
    }
    return undefined;
}

    export const getSecretData = async (req) => {

    const url = 'http://localhos:3000/api/v1/secret';

return await axios.get(url, setAuthHeader(req)).then(response => response.data);
}
