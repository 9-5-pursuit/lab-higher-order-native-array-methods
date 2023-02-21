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
  songs.sort((element, element2) => {
  return element.runtimeInSeconds - element2.runtimeInSeconds;
  })
  return songs
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

  songs.sort((element, element2) => {
   let lowCaseArt = element.artist.toLowerCase()
   let lowCaseArt2 = element2.artist.toLowerCase()
   console.log(lowCaseArt.charCodeAt(0) > lowCaseArt2.charCodeAt(0))
   
   
   if  (lowCaseArt < lowCaseArt2) {
    return 1
   }
    if (lowCaseArt2 < lowCaseArt) {
    return -1
   }
    if (lowCaseArt === lowCaseArt2) {
      return 0
    }


   
  })
  return songs
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
  songs.sort((element, element2) => {
    let lowCaseTit = element.title.toLowerCase()
    let lowCaseTit2 = element2.title.toLowerCase();
    if (lowCaseTit2 > lowCaseTit) {
      return -1
     }
     if (lowCaseTit > lowCaseTit2) {
      return 1
     }
      if (lowCaseTit === lowCaseTit2) {
      return 0
    }
  })
  return songs


}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
