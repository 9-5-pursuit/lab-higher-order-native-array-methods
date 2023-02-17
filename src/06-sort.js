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
function sortByRuntimeAscending(songs) {
  const newSongs = songs.sort(
    (a, b) => a.runtimeInSeconds - b.runtimeInSeconds
  );
  // Creates a new variable named songs.
  // Then loops through the songs array by using the sort() method.
  // Using the sorth method variables, a and b which are meant to indicate different indexes in the array
  // Create a expression to check from shortest to longest.
  return newSongs;
  // return the songs variable
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  const newSongs = songs.sort((a, b) => {
    // Created a new variable named newSongs
    // Looped through the songs array using the sort method
    // Initialized new variables a, b to indicate elements in the songs array.
    const artistA = a.artist.toLowerCase();
    const artistB = b.artist.toLowerCase();
    // Created new vriables to declare the element index with artis name
    // Also normalized  the string values to lowercase so the reading is comparable
    if (artistA < artistB) {
      return 1;
      // Created an expression which compared the elements in the index to see which element is less
      // Then returned 1 to create a order from least to greatest
    }
    if (artistA > artistB) {
      return -1;
    } // Creeated an expression which compared the elemnts in the index to see which element is greater
    // then returned -1 to create a order from greatest to least
    return 0;
  });
  return newSongs;
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  const newSongs = songs.sort((a, b) => {
    const artistA = a.title.toLowerCase();
    const artistB = b.title.toLowerCase();
    if (artistA < artistB) {
      return -1;
    }
    if (artistA > artistB) {
      return 1;
    }
    return 0;
  });
  return newSongs;
}
module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
