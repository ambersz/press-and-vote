const Game = require('../models/game.js');

/**
 * @type {{[string]: Game}} gameMap
 */
const db = {};

/**
 *
 * @param {string} id
 * @returns {Game?}
 */
function getGameByID(id) {
  return db[id];
}

/**
 *
 * @param {string} id
 * @param {Game} game
 * @returns
 */
function setGameByID(id, game) {
  return (db[id] = game);
}

module.exports = {
  getGameByID,
  setGameByID,
};
