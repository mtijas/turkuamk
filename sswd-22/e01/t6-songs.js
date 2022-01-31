const songs = [
  "Manic Street Preachers - Send Away The Tigers",
  "Manic Street Preachers - Imperial Bodybags",
  "Manic Street Preachers - Autumnsong",
  "Manic Street Preachers - Indian Summer",
  "Manic Street Preachers - Rendition",
  "Manic Street Preachers - Underdogs",
];

function getRandomSong(songs) {
  let randomInt = Math.floor(Math.random() * songs.length);
  return songs[randomInt];
}

console.log(getRandomSong(songs));
