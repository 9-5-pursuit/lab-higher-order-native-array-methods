/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */

// returns arr with all songs by artist "Saib"
// songs.artist === "saib"
// function getSongsBySaib(songs) {}

const getSongsBySaib = (songs) => songs.filter((saibSongs) => saibSongs.artist === "Saib");
console.log(getSongsBySaib(exampleSongData));

// function getSongsBySaib {
//   return songs.filter((saibSongs) => saibSongs.artist === "Saib");
// }

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */

// returns arr with all songs over three mins
// 180 secs is three mins

// function getSongsOverThreeMinutes(songs) {}

const getSongsOverThreeMinutes = (songs) => songs.filter((songsover180) => songsover180.runtimeInSeconds > 180);
console.log(getSongsOverThreeMinutes(exampleSongData));

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */

// returns arr of songs where the song title is the same as the album

// function getTitleTracks(songs) {}

const getTitleTracks = (songs) => songs.filter((songTitleTrack) => songTitleTrack.title === songTitleTrack.album);
console.log(getTitleTracks(exampleSongData))

module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
};
