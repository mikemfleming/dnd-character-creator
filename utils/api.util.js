
exports.sendResponse = (res, message) => (payload) => {
  console.log(message);
  return res.status(200).send({
    ok: 1,
    payload,
    message,
  });
};

exports.sendError = (res, message) => (error) => {
  console.log(message);
  return res.status(500).send({
    ok: 0,
    error,
    message,
  });
};

exports.request = (url, options) => {
  return fetch(url).then(data => data.json());
};
