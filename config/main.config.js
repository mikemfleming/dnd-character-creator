
module.exports = (() => {
  const URLS = {
    ROOT: 'http://dnd5eapi.co/api',
    get RACES() { return `${this.ROOT}/races`; },
    get SUBRACES() { return `${this.ROOT}/subraces`; },
  };
  return {
    URLS,
  };
})();
