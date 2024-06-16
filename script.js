document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var playBtn = document.getElementById("playBtn");

  function updatePlayButton() {
    if (video.paused) {
      playBtn.innerHTML = '<i class="bi bi-play-circle"></i>';
    } else {
      playBtn.innerHTML = '<i class="bi bi-pause-circle"></i>';
    }
  }

  playBtn.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    updatePlayButton();
  });

  video.addEventListener("play", function () {
    updatePlayButton();
  });

  video.addEventListener("pause", function () {
    updatePlayButton();
  });

  video.addEventListener("ended", function () {
    playBtn.innerHTML = '<i class="bi bi-play-circle"></i>';
  });

  var stopBtn = document.getElementById("stopBtn");
  stopBtn.addEventListener("click", function () {
    video.pause();
    video.currentTime = 0;
    playBtn.innerHTML = '<i class="bi bi-play-circle"></i>';
  });
});
