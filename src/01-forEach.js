/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
/**
 * I used the forEach() method to check each element in the given array for a song title to log.
 */
function printAllSongTitles(songs) {
  songs.forEach(element => console.log(element.title));
}

/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
/**
 * I used the forEach() method to check each element in the given array for a song title and artist of the song to log.
 */
function printSongDetails(songs) {
  songs.forEach(element => console.log(`${element.title} by ${element.artist}`));
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
/**
 * I used the forEach() method to check each element of the given array for the 'runtimeInSeconds' and check if the time was greater than 3 minutes (180 seconds) and if the song strictly met this requirement then the title would be logged.
 */
function printSongTitlesOverThreeMinutes(songs) {
  songs.forEach(element => element.runtimeInSeconds > 180 === console.log(element.title));
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
