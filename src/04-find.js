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
function findPinkElephantsByTimestreet(songs) {
  songs = songs.find(song => song.title === "Pink Elephants");
  // create a songs variable 
  // then loop throught the songs array 
  // create a new variable for each element in the songs array
  // write an expression that checks if the element has the value 'pink Elephants'
  return songs;
}// returns the updated variable songs and returns it in a array.

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstSongUnderThreeMinutes(songs) {
  songs = songs.find(song => song.runtimeInSeconds < 180)
  // create a songs variable
  // then loop throught the songs array
  // create a new variable for each element in the songs array
  // write an expression that checks if the elements runtimeinseconds is less than 180
  return songs;
  // return the updated variable songs and returns it in a array.
}

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstTitleTrack(songs) {
  songs = songs.find(song => song.title === song.album);
  // creates  songs variable
  // then loops throught the songs array with find()
  // creates a new variable for each element in the songs array
  // then writes an expressiong that checks if the song title equals the song album
  return songs;
  // return the updated variable songs and returns it in a array. 
}

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
