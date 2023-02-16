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

// Using map to iterate over an array of songs and return an array of song titles. when is using map better than forEach? forEach is better when you want to do something to each element in the array, but map is better when you want to return a new array with the same number of elements as the original array. forEach is better when you want to do something to each element in the array, but map is better when you want to return a new array with the same number of elements as the original array.
function getSongTitles(songs) {
  const songTitles = songs.map((song) => {
    return song.title;
  });
  return songTitles;
}

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */

// Using map to iterate over an array of songs and return an array of song titles with the artist. map is better when you want to return a new array with the same number of elements as the original array.
function getSongDetails(songs) {
  const songDetails = songs.map((song) => {
    return `${song.title} by ${song.artist}`;
  });
  return songDetails;
}

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */

// Using map to iterate over an array of songs and return an array of objects, where each object has a key that is the song title and has a value that is the song artist. map is better when you want to return a new array with the same number of elements as the original array.
function getTitleAndArtist(songs) {
  const titleAndArtist = songs.map((song) => {
    return { [song.title]: song.artist };
  });
  return titleAndArtist;
}

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
