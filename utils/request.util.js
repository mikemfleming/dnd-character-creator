
export const sendRequest = (url) => {
  return fetch(url)
    .then(data => data.json());
};
