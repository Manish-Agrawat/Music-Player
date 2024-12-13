# Music Player

A simple music player application built with HTML, CSS, and JavaScript. This player supports playing a fixed set of songs defined in an array and includes basic controls such as play, pause, next, and previous.

## Features
- Play and pause functionality.
- Skip to the next song.
- Return to the previous song.
- Display current song details.

## How It Works
1. An array of songs is defined, containing objects with properties like `title`, `artist`, and `src` (path to the song file).
2. The JavaScript logic handles song navigation and playback control.
3. The player UI is updated dynamically based on user interactions.

## File Structure
```plaintext
📂 MusicPlayer

├── index.html       # HTML structure for the music player
├── style.css        # CSS for styling the player
├── script.js        # JavaScript logic for functionality
```

## Setup
1. Clone or download this repository.
2. Ensure all song files are correctly referenced in the `songs` array in `script.js`.
3. Open `index.html` in a browser to test the player.

## Code Examples
### Sample Songs Array in `script.js`
```javascript
const songs = [
  {
    title: "Song One",
    artist: "Artist One",
    src: "songs/song1.mp3"
  },
  {
    title: "Song Two",
    artist: "Artist Two",
    src: "songs/song2.mp3"
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "songs/song3.mp3"
  }
];
```

### Basic Player Logic in `script.js`
```javascript
let currentSongIndex = 0;
const audio = new Audio();

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  document.getElementById("title").textContent = song.title;
  document.getElementById("artist").textContent = song.artist;
}

function playSong() {
  audio.play();
  document.getElementById("play-btn").textContent = "Pause";
}

function pauseSong() {
  audio.pause();
  document.getElementById("play-btn").textContent = "Play";
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

// Initial Setup
loadSong(currentSongIndex);

// Event Listeners
document.getElementById("play-btn").addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

document.getElementById("next-btn").addEventListener("click", nextSong);
document.getElementById("prev-btn").addEventListener("click", prevSong);
```

## Usage
1. Click the **Play** button to start the song.
2. Use the **Next** and **Previous** buttons to navigate through the playlist.
3. The song title and artist are displayed dynamically.



## Customization
- Add more songs to the `songs` array.
- Customize the UI in `style.css` to suit your design preferences.

## License
This project is open-source and free to use for educational purposes.
