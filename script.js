const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Songs array
// const songs = ["Vaapsi", "52 Gaj Ka Daman", "Tera Pyaar", "Haye Mera Dil"];

// Keep track of song
// let songIndex = 0;

// Load initial song
// loadSong(songs[songIndex]);

// Functions

// Songs array
const songs = ["Vaapsi", "52 Gaj Ka Daman", "Tera Pyaar", "Haye Mera Dil"];

// Keep track of song
let songIndex = 0;

// Load initial song
loadSong(songs[songIndex]);

// Functions
function loadSong(song) {
  title.innerText = song;
  audio.src = `./music/${song}.mp3`;
  cover.src = `music.png`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i").classList.replace("fa-play", "fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i").classList.replace("fa-pause", "fa-play");
  audio.pause();
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;
}

function setProgress(e) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);
