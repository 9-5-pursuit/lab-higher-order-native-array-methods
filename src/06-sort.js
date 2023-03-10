/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
// organize array from smallest -> largest
// sorting numbers so uppercase and lowercase arent needed right now
// (a - b) would give ascending order? thats what google said 
function sortByRuntimeAscending(songs) {

  return songs.sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds);

}
// console.log(sortByRuntimeAscending(exampleSongData));
/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
// largest -> smallest
// lowercase needed
// same concept as before but without numbers
function sortByArtistNameDescending(songs) {

  return songs.sort((a, b) => a.artist.toLowerCase() > b.artist.toLowerCase() ? -1 : 1);

}
// console.log(sortByArtistNameDescending(exampleSongData));
// didnt know how to do this so i had to watch the recording
/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
// same concept as before but with song title and its also ascending so ternary operator has to be reversed
function sortBySongTitleAscending(songs) {

  return songs.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);

}
// console.log(sortBySongTitleAscending(exampleSongData));

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
