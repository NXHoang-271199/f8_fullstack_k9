var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var spanEl = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;
var isDragging = false;

progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        isDragging = true;
        updateProgress(e.offsetX);
        document.addEventListener("mousemove", handleDrag);
    }
});

spanEl.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    if (e.which === 1) {
        isDragging = true;
        document.addEventListener("mousemove", handleDrag);
        clientXSpan = e.clientX;
        offsetLeft = e.target.offsetLeft;
    }
});

document.addEventListener("mouseup", function (e) {
    if (isDragging) {
        isDragging = false;
        document.removeEventListener("mousemove", handleDrag);
        updateAudioTime();
    }
});

function handleDrag(e) {
    var spaceMove = e.clientX - clientXSpan + offsetLeft;
    updateProgress(spaceMove);
}

function updateProgress(offsetX) {
    var rate = (offsetX / progressBarWidth) * 100;
    if (rate < 0) rate = 0;
    if (rate > 100) rate = 100;
    progress.style.width = `${rate}%`;
}

function updateAudioTime() {
    var newTime = (parseFloat(progress.style.width) / 100) * audio.duration;
    audio.currentTime = newTime;
}

var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

var getTimeFormat = function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds}`;
}

audio.addEventListener("canplay", function () {
    durationEl.innerText = getTimeFormat(audio.duration);
});

playAction.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener("play", function () {
    playAction.classList.replace("fa-play", "fa-pause");
});

audio.addEventListener("pause", function () {
    playAction.classList.replace("fa-pause", "fa-play");
});

audio.addEventListener("timeupdate", function () {
    if (!isDragging) {
        currentTimeEl.innerText = getTimeFormat(audio.currentTime);
        var rate = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${rate}%`;
    }
});

audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    audio.pause();
    currentTimeEl.innerText = getTimeFormat(0);
    progress.style.width = "0%";
});
// Hiển thị thời gian xem trước khi di chuột lên thanh tiến trình
progressBar.addEventListener("mousemove", function (e) {
    var previewTime = (e.offsetX / progressBarWidth) * audio.duration;
    var previewTimeEl = document.querySelector(".preview-time");

    if (!previewTimeEl) {
        previewTimeEl = document.createElement("div");
        previewTimeEl.classList.add("preview-time");
        progressBar.appendChild(previewTimeEl);
    }

    previewTimeEl.innerText = getTimeFormat(previewTime);
    previewTimeEl.style.left = `${e.offsetX}px`;
});

// Gỡ bỏ thời gian xem trước khi chuột rời khỏi thanh tiến trình
progressBar.addEventListener("mouseleave", function () {
    var previewTimeEl = document.querySelector(".preview-time");
    if (previewTimeEl) {
        previewTimeEl.remove();
    }
});