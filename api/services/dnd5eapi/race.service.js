
const apiUtil = require('../../../utils/api.util');
const { RACES } = require('../../../config/main.config').URLS;

/**
 * Queries the 5E API for races by id and
 * ensures a uniform response from each race
 * * */
exports.get = (index) => {
  const url = `${RACES}/${index}`;
  return apiUtil.request(url)
    .then(data => ({
      starting_proficiency_options: null,
      language_options: null,
      trait_options: null,
      ...data,
    }));
};
