// Select all the play buttons
const playButtons = document.querySelectorAll('.play-img img');

// Function to play/pause a song
playButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const albumElement = button.closest('.album');
    const imgAlbElement = albumElement.querySelector('.img-alb img');
    const songTitle = imgAlbElement.alt;

    const audio = new Audio(`./songs/${songTitle}.mp3`); // Ensure to have songs with the same name in a "songs" directory

    if (audio.paused) {
      audio.play();
      button.src = './pause-icon.svg'; // Update with the path to your pause icon
    } else {
      audio.pause();
      button.src = './play-icon.svg'; // Update with the path to your play icon
    }
  });
});

// Function to update the seek bar
function updateSeekBar() {
  const seekBar = document.querySelector('.seekbar > .seekin');
  const audio = new Audio(); // Create an audio element

  audio.addEventListener('timeupdate', () => {
    const value = (audio.currentTime / audio.duration) * 100;
    seekBar.style.width = `${value}%`;
  });

  seekBar.addEventListener('click', (e) => {
    const clickPosition = (e.pageX - seekBar.offsetLeft) / seekBar.offsetWidth;
    audio.currentTime = clickPosition * audio.duration;
  });
}

// Initialize the seek bar
updateSeekBar();
