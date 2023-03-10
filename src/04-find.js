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

// returns a single obj that is this one song
function findPinkElephantsByTimestreet(songs) {

// const findPinkElephantsByTimestreet = (songs) => songs.find((findSong) = findSong.title === "Pink Elephants")
// console.log(findPinkElephantsByTimestreet(exampleSongData));

  return songs.find((findSong) => findSong.title === "Pink Elephants")
  
}

// console.log(findPinkElephantsByTimestreet(exampleSongData));

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */

// returns FIRST song in list that is under three mins
// < 180
function findFirstSongUnderThreeMinutes(songs) {

  return songs.find((findSong) => findSong.runtimeInSeconds < 180);

}

// console.log(findFirstSongUnderThreeMinutes(exampleSongData));

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */

// returns FIRST song in list where song title === song album
function findFirstTitleTrack(songs) {

  return songs.find((findSong) => findSong.title === findSong.album);

}

// console.log(findFirstTitleTrack(exampleSongData));

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
