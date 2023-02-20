/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See t∂ong data for more.
 */
function printAllSongTitles(songs) {
  // Checking for all of the song titles only.
  songs.forEach((songs) => {
    console.log(songs.title);
  });
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
function printSongDetails(songs) {
  // Checking for song title and song artist
  songs.forEach((songs) => {
    console.log(`${songs.title} by ${songs.artist}`);
  });
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  // Check if runtime is greater than 3 minutes
  songs.forEach((songs) => {
    if (songs.runtimeInSeconds > 180) {
      // 3 minutes converts to 180 seconds
      console.log(songs.title);
    }
  });
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
