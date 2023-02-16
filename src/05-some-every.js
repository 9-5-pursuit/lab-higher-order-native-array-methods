/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */

// Using every to iterate over an array of songs and return true if every song is over two minutes. every is better when you want to return a boolean value based on a condition that must be true for every element in the array.
function allSongsAreOverTwoMinutes(songs) {
  const allSongsAreOverTwoMinutes = songs.every((song) => {
    return song.runtimeInSeconds > 120;
  });
  return allSongsAreOverTwoMinutes;
}

/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */

// Using some to iterate over an array of songs and return true if any song is over four minutes. some is better when you want to return a boolean value based on a condition that must be true for at least one element in the array.
function anySongIsOverFourMinutes(songs) {
  const anySongIsOverFourMinutes = songs.some((song) => {
    return song.runtimeInSeconds > 240;
  });
  return anySongIsOverFourMinutes;
}

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */

// Using some to iterate over an array of songs and return true if any song is by the artist "Peanut".
function anySongIsByPeanut(songs) {
  const anySongIsByPeanut = songs.some((song) => {
    return song.artist === "Peanut";
  });
  return anySongIsByPeanut;
}

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
