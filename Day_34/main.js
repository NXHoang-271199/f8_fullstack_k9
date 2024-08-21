document.addEventListener("visibilitychange", handleVisibilityChange);
var counterDisplay = document.querySelector(".counter");
var getLinkBtn = document.querySelector(".btn")
var countDownDuration = 30;
var countDown = countDownDuration
var countdownActive = true;
var startTime;
var pauseTime = 0;
function startCountDown() {
    var frame = window.requestAnimationFrame
    // console.log(frame);

    var updateTimer = function (timestamp) {
        if (!startTime) { 
            startTime = timestamp;    
        };
        var elapsedTime = Math.floor((timestamp - startTime) / 1000);
        console.log(elapsedTime);
        

        if (elapsedTime >= countDownDuration || !countdownActive) {
            countdownActive = false;
            getLinkBtn.disabled = false;
            getLinkBtn.style.background = "";
            getLinkBtn.style.cursor = "pointer";
            
            counterDisplay.textContent = 0;
        } else {
            countDown = countDownDuration - elapsedTime;
            counterDisplay.textContent = countDown;
            getLinkBtn.style.background = "#cdcdcd";
            getLinkBtn.style.cursor = "not-allowed";
            getLinkBtn.style.color = "#333";
            frame(updateTimer);
        }
    }

    frame(updateTimer);
}

startCountDown();

getLinkBtn.addEventListener("click", function (e) { 
    if (!countdownActive) {
        window.location.href = "https://fullstack.edu.vn/"
    }
})

function handleVisibilityChange() {
    if (document.hidden) {
        countdownActive = false;
        pauseTime = startTime;
        counterDisplay.textContent = "Paused";
    } else {
        countdownActive = true;
        startTime = pauseTime;
        startCountDown();
    }
}

// Chống dev tools bằng cách kiểm tra console.log lặp liên tục
function blockDevTools() {
    let element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            countdownActive = false;
            button.disabled = true;
            alert("DevTools is open! The link is disabled.");
        }
    });
    console.log(element);
    console.clear();
}

blockDevTools();