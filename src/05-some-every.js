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
function allSongsAreOverTwoMinutes(songs) {
  songs = songs.every(song => 
    // Declares a variable name songs
    // Then looping through the songs array using the every method
    // Then  create a new variable named song which indicated every element in the array
    song.runtimeInSeconds > 120
     // Then check to see if which element has a runtimeinseconds over 120 seconds
  )
  return songs;
  //returend the songs variable
}

/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(songs) {
  songs = songs.some(song => 
// Declared a new variable name songs
// Then i looped throught songs array using the some method
// Then created a new variable name song which indicated every  ekement in the array
 song.runtimeInSeconds > 240
// Then created a expression to check if the element runtimeinseconds is over 240 seconds
 )
  return songs;
  // return the songs variable 
}

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {
  songs = songs.some( song =>
    // Declared a new variable name songs
    // Looped through the songs array using the some method
    // Created a new variable name song to indicate every element in the array
    song.artist === "Peanut" )
    // Created a expression to check if the element artis equals to "Peanut"
    return songs;
}

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
