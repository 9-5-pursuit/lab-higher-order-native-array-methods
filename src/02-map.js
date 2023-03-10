/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */

const getSongTitles = (songs) => songs.map((songTitles) => songTitles.title);

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */

// kind of same as before but has to return string with song title by song artist?
// format has to be title by artist
const getSongDetails = (songs) => songs.map((songDetails) => `${songDetails.title} by ${songDetails.artist}`);

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */

// returns arr of objs where each obj has key (song title) and val (song artist)

function getTitleAndArtist(songs) {
// const getTitleAndArtist = (songs) => songs.map((songTitleAndArtist) => [songTitleAndArtist.title]: songTitleAndArtist.artist);

  return songs.map((songTitleAndArtist) => {
    return {[songTitleAndArtist.title]: songTitleAndArtist.artist
    }
  });

}
module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
