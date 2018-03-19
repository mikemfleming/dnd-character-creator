
const log = require('../logger');

exports.sendResponse = (res, message) => (payload) => {
  log.info(message);
  return res.status(200).send({
    ok: 1,
    payload,
    message,
  });
};

exports.sendError = (res, message) => (error) => {
  log.error(error, message);
  return res.status(500).send({
    ok: 0,
    error,
    message,
  });
};

exports.request = (url, options) => {
  log.info(`SENDING REQUEST TO ${url}`);
  return fetch(url).then(data => data.json());
};
