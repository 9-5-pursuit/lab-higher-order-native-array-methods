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

// Using sort to iterate over an array of songs and return an array of all songs ordered by their runtime. sort is better when you want to return a new array with the elements from the original array in a different order.
function sortByRuntimeAscending(songs) {
  const songsByRuntimeAscending = songs.sort((songA, songB) => {
    return songA.runtimeInSeconds - songB.runtimeInSeconds;
  });
  return songsByRuntimeAscending;
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */

// Using sort to iterate over an array of songs and return an array of all songs ordered by their artist name. sort is better when you want to return a new array with the elements from the original array in a different order.
function sortByArtistNameDescending(songs) {
  const songsByArtistNameDescending = songs.sort((songA, songB) => {
    return songB.artist.localeCompare(songA.artist);
  });
  return songsByArtistNameDescending;
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */

// Using sort to iterate over an array of songs and return an array of all songs ordered by their song title. sort is better when you want to return a new array with the elements from the original array in a different order.
function sortBySongTitleAscending(songs) {
  const songsBySongTitleAscending = songs.sort((songA, songB) => {
    return songA.title.localeCompare(songB.title);
  });
  return songsBySongTitleAscending;
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
