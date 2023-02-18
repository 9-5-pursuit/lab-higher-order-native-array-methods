/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 * ----------------------------------------------
 * - find() - returns first element that comes back true
 * - assigned getPink.. to function with songs param
 * - in the function, returns result of songs.find() function which checks every element until finds song with title. and returns it.
 */
let findPinkElephantsByTimestreet = (songs) =>
  songs.find((song) => song.title === "Pink Elephants");

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 * ----------------------------------------------
 * - checked song.runtime that is less than 180 seconds
 * - first element that comes back true will be returned
 */
let findFirstSongUnderThreeMinutes = (songs) =>
  songs.find((song) => song.runtimeInSeconds < 180);

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 * ----------------------------------------------
 * - checked if song title strictly equals album name
 */
let findFirstTitleTrack = (songs) =>
  songs.find((song) => song.title === song.album);

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
