
const apiUtil = require('../../utils/api.util');
const Race = require('../services/dnd5eapi/race.service');

exports.get = (req, res) => {
  const { raceId } = req.params;
  return Race.get(raceId)
    .then(apiUtil.sendResponse(res, `GOT RACE BY ID ${raceId}`))
    .catch(apiUtil.sendError(res, `FAILED TO GET RACE BY ID ${raceId}`));
};
