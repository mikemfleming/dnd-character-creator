
const apiUtil = require('../../utils/api.util');
const Subrace = require('../services/dnd5eapi/subrace.service');

exports.get = (req, res) => {
  const { subraceId } = req.params;
  return Subrace.get(subraceId)
    .then(apiUtil.sendResponse(res, `GOT SUBRACE BY ID ${subraceId}`))
    .catch(apiUtil.sendError(res, `FAILED TO GET SUBRACE BY ID ${subraceId}`));
};
