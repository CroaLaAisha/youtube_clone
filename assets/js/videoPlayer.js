const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"><i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"><i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function exitFullScreen() {
  document.exitFullscreen().catch((err) => Promise.resolve(err));
  fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScrnBtn.addEventListener("click", goFullScreen);
}

function goFullScreen() {
  videoContainer.webkitRequestFullscreen();
  fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}

function handleKeycheck(e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case "space":
      handlePlayClick();
      break;

    case "KeyM":
      handleVolumeClick();
      break;

    case "enter":
      break;

    default:
  }
}

function init() {
  //videoPlayer keyEvent
  videoPlayer.addEventListener("keydown", handleKeycheck);

  //videoPlay event
  playBtn.addEventListener("click", handlePlayClick);

  //videoVolume event
  volumeBtn.addEventListener("click", handleVolumeClick);

  //videoFullScreen event
  fullScrnBtn.addEventListener("click", goFullScreen);
}

if (videoContainer) {
  init();
}
