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
 * ----------------------------------------------
 * - song a runtime minus songB runtime if comes up less than zero moves to the front; if comes up zero stays in its position and if comes up more than zero moves to the end ;
 * - keeps checking until loops thru whole array without changing the position of a value
 */
let sortByRuntimeAscending = (songs) =>
  songs.sort((songA, songB) => songA.runtimeInSeconds - songB.runtimeInSeconds);
/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 * -----------------------------------------
 * - ternary to return a < b if true comes back as 1 gets put b first, returns -1 puts a first or 0 stays in current position
 *
 */
let sortByArtistNameDescending = (songs) =>
  songs.sort((songA, songB) => {
    let artistA = songA.artist.toUpperCase();
    let artistB = songB.artist.toUpperCase();
    // // console.log(artistA, artistB);
    // if (artistA > artistB) {
    //   console.log(artistA, artistB);
    //   return -1;
    // }
    // if (artistA < artistB) {
    //   return 1;
    // }
    // return 0;
    return artistA < artistB ? 1 : -1 || 0;
  });

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 * -----------------------------------------
 * - ternary to return a < b if true comes back as -1 gets put a first if returns 1 puts b first or 0 tto stay in its current position
 * - checks checking until goes thru every element without sorting
 */
let sortBySongTitleAscending = (songs) =>
  songs.sort((songA, songB) => {
    let titleA = songA.title.toLowerCase();
    let titleB = songB.title.toLowerCase();

    // if (titleA < titleB) {
    //   return -1;
    // }
    // if (titleA > titleB) {
    //   return 1;
    // }
    // return 0;
    return titleA < titleB ? -1 : 1 || 0;
  });

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
