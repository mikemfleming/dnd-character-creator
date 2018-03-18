
const apiUtil = require('../../../utils/api.util');
const { RACES } = require('../../../config/main.config').URLS;

exports.get = (index) => {
  const url = `${RACES}/${index}`;
  return apiUtil.request(url);
};
