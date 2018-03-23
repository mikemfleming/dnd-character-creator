
const apiUtil = require('../../../utils/api.util');
const { SUBRACES } = require('../../../config/main.config').URLS;

/**
 * Queries the 5E API for subraces by id and
 * ensures a uniform response from each subrace
 * * */
exports.get = (index) => {
  const url = `${SUBRACES}/${index}`;
  return apiUtil.request(url);
};
