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
 */

// Using find to iterate over an array of songs and return the song "Pink Elephants" from the song array, if it is in the array. find is better when you want to return a single element from the array.
function findPinkElephantsByTimestreet(songs) {
  const pinkElephants = songs.find((song) => {
    return song.title === "Pink Elephants" && song.artist === "Timestreet";
  });
  return pinkElephants;
}

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */

// Using find to iterate over an array of songs and return the first song in the list that is under three minutes.
function findFirstSongUnderThreeMinutes(songs) {
  const firstSongUnderThreeMinutes = songs.find((song) => {
    return song.runtimeInSeconds < 180;
  });
  return firstSongUnderThreeMinutes;
}

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */

// Using find to iterate over an array of songs and return the first song in the list where the song title equals the song album.
function findFirstTitleTrack(songs) {
  const firstTitleTrack = songs.find((song) => {
    return song.title === song.album;
  });
  return firstTitleTrack;
}

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
