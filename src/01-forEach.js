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

// Using forEach to iterate over an array of songs and log out the title of each song. why use forEach instead of map? forEach is better when you want to do something to each element in the array, but map is better when you want to return a new array with the same number of elements as the original array.
function printAllSongTitles(songs) {
  songs.forEach((song) => {
    console.log(song.title);
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

// Using forEach to iterate over an array of songs and log out the title and artist of each song.
function printSongDetails(songs) {
  songs.forEach((song) => {
    console.log(`${song.title} by ${song.artist}`);
  });
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */

// Using forEach to iterate over an array of songs and log out the title of each song with a runtime over three minutes.
function printSongTitlesOverThreeMinutes(songs) {
  songs.forEach((song) => {
    if (song.runtimeInSeconds > 180) {
      console.log(song.title);
    }
  });
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
