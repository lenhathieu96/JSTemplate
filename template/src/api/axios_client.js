import axios from 'axios';

import queryString from 'query-string';
import {Global} from '../utils/global';

const axiosClient = axios.create({
  baseURL: Global.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  try {
    // let json;
    // const qrcode = await AsyncStorage.getItem('@Qrcode');
    // if (qrcode) {
    //   json = {
    //     appKey: global.appKeyJson.appKey,
    //     timestamp: getTimestamp(),
    //     barcode: qrcode,
    //   };
    // } else {
    //   json = {appKey: global.appKeyJson.appKey, timestamp: getTimestamp()};
    // }
    // const hash = encrypt(json, global.partnerCode);
    // config.headers.Token = hash;
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data && response.data.message === 'Thành công') {
      return response.data.data;
    } else {
      console.log(response.data.message, 'API message');
      return null;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosClient;
