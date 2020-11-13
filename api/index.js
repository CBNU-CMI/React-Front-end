import axios from 'axios';

// console.log(window.location);

const token = `fyhhpHxmc4I:APA91bEXCyw_TUvx3M-yKxyaKc72Xv0a7c2MVFbrDtTZfkqpZKIajyTi1Us0TAFHliQtq02Fy3Y_xTyBnmC8k1ea3qCLBQVh1aNFYs-ei2ZxMwvS4oFtnzPugaA2N9DQx2R63INnU9Pv`;

const getConfig = () => {
  return {
    baseURL: 'http://' + location.hostname + ':3000',
    headers: {
      token,
    },
  };
};

const getNoticeSiteList = ({ type, offset }) => {
  return axios.get(`/notice/site/list/${type}?offset=${offset}`, getConfig());
};

const getNotice = (params) => {
  return axios.get(`/notice`, {
    ...getConfig(),
    params,
  });
};

const getNoticeListBySite = ({ siteId, offset }) => {
  return axios.get(`/notice/site/${siteId}?offset=${offset}`, getConfig());
};

const getNoticeListByCategory = ({ siteId, offset }) => {
  return axios.get(`/notice/category/${siteId}?offset=${offset}`, getConfig());
};

const getRestaurant = ({ date, place }) => {
  return axios.get(`/restaurant?date=${date}&place=${place}`, getConfig());
};

const getSchedule = ({ year, month }) => {
  return axios.get(`/schedule?year=${year}&month=${month}`, getConfig());
};

const getSiteListCategory = () => {
  return axios.get(`/notice/site/list/category`, getConfig());
};

const getAllowSiteList = () => {
  return axios.get(`/allow/site/list`, getConfig());
};

const setAllowSite = (site_id) => {
  return axios.post(`/allow/site/${site_id}`,{}, getConfig());
};

const unsetAllowSite = (site_id) => {
  return axios.delete(`/allow/site/${site_id}`, getConfig());
};

export {
  getNoticeSiteList,
  getNotice,
  getNoticeListBySite,
  getNoticeListByCategory,
  getRestaurant,
  getSchedule,
  getSiteListCategory,
  getAllowSiteList,
  setAllowSite,
  unsetAllowSite,
};
