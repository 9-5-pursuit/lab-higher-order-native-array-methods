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
  let ascending = songs.sort((song,song2) => {
    return song.runtimeInSeconds - song2.runtimeInSeconds

  })
  return ascending;
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
  function compare (a,b){
    const artistA = a.artist.toUpperCase()
    const artistB = b.artist.toUpperCase()
    let comaprison = 0;
    
    if (artistA > artistB){
      comaprison = 1;
    }
    else if (artistA < artistB){
      comaprison = -1;
    }
    return comaprison
  }
 let ascending = songs.sort(compare)
 return ascending.reverse()
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
  function compare (a,b){
    const SongTitle_A = a.title.toUpperCase()
    const SongTitle_B = b.title.toUpperCase()
    let comaprison = 0;
    
    if (SongTitle_A > SongTitle_B){
      comaprison = 1;
    }
    else if (SongTitle_A < SongTitle_B){
      comaprison = -1;
    }
    return comaprison
  }
 let ascending = songs.sort(compare)
 return ascending;
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
