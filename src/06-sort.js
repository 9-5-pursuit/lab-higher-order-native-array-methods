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
  let sortedSongsByRuntime = songs.sort((a, b) => {
    return a.runtimeInSeconds - b.runtimeInSeconds;
  });
  return sortedSongsByRuntime;
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
  // adding a function for word capitalization that I will use in the sort in the next step.
  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  // declared new variables to use with the capitalization function. I will use the new variables in my comparison function below. This will be sorting in descending order.
  return songs.sort((a, b) => {
    const artistA = capitalizeWords(a.artist);
    const artistB = capitalizeWords(b.artist);
    if (artistB < artistA) {
      return -1;
    }
    if (artistB > artistA) {
      return 1;
    }
    return 0;
  });
  return;
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
  // using my word capitalization function again.
  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  // declared new variables to use with the capitalization function. I will use the new variables in my comparison function. Switched the variables up since this one is sorting in ascending order.
  return songs.sort((a, b) => {
    const titleA = capitalizeWords(a.title);
    const titleB = capitalizeWords(b.title);
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  return;
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending
};
