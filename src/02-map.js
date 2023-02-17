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
 * ---------------------------------------------------------------
 * - changed function keyword to let var.
 * - with param of songs, execute map function
 * - map fn uses songs array iterating thru each song obj
 * - map creates var array and added song title for each iteration of song.
 */

let getSongTitles = (songs) => songs.map((song) => song.title);

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 * ---------------------------------------------------------------
 * - removed function keyword and created var for songdetails function
 * - songs as param
 * - function uses map function to iterate thru each song obj
 * - returns string with song title and artist
 */
let getSongDetails = (songs) =>
  songs.map((song) => `${song.title} by ${song.artist}`);

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 * ---------------------------------------------------------------
 * - removed function keyword and created var for getTitleAndArtist function
 * - songs as param returning obj with song title as key and artist as value
 */
let getTitleAndArtist = (songs) =>
  songs.map((song) => ({
    [song.title]: song.artist,
  }));

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
