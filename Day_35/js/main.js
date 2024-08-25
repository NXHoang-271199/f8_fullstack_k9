const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
// Khởi tạo đối tượng SpeechRecognition
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
console.log(recognition);
console.log(speechRecognitionList);

recognition.lang = "vi-VNI"; // Thiết lập ngôn ngữ tiếng Việt
recognition.continuous = false; // Không nghe liên tục
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const searchBox = document.querySelector(".search-box");
const btnEl = document.querySelector(".btn");
const actionEl = document.querySelector(".action");
const newDiv = document.createElement("div");

// Tạo phần tử `div` mới để hiển thị kết quả
const resultEl = document.createElement("div");
resultEl.classList.toggle("result");
resultEl.style.display = "none"; // Ẩn phần tử này mặc định
searchBox.appendChild(resultEl);

recognition.onresult = function (event) {
  const transcript = event.results[0][0].transcript.toLowerCase();
  console.log("Transcript: ", transcript);
  actionEl.classList.add("success");
  actionEl.textContent = "Bạn đã nói: " + transcript;
  // Hiển thị thông báo "Đã thực hiện xong"
  resultEl.textContent = "Đã thực hiện xong";
  resultEl.style.display = "block";
  // Thực hiện các lệnh dựa trên transcript sau 1 giây (1000 ms)
  setTimeout(() => {
    if (transcript.includes("google")) {
      window.open("https://www.google.com", "_blank");
    } else if (transcript.includes("facebook")) {
      window.open("https://www.facebook.com", "_blank");
    } else if (transcript.includes("youtube")) {
      window.open("https://www.youtube.com", "_blank");
    } else if (transcript.includes("google drive")) {
      window.open("https://drive.google.com", "_blank");
    } else if (
      transcript.includes("google maps") ||
      transcript.includes("bản đồ")
    ) {
      window.open("https://www.google.com/maps", "_blank");
    } else if (
      transcript.includes("chỉ đường") ||
      transcript.includes("tới") ||
      transcript.includes("đường tới")
    ) {
      const destination =
        transcript.split("tới")[1] || transcript.split("đường tới")[1];
      window.open(
        `https://www.google.com/maps/search/${destination.trim()}`,
        "_blank"
      );
    } else if (transcript.includes("bài hát")) {
      const songName = transcript.split("bài hát")[1].trim();
      window.open(
        `https://mp3.zing.vn/tim-kiem/bai-hat.html?q=${songName}`,
        "_blank"
      );
    } else if (
      transcript.includes("mở bài hát") ||
      transcript.includes("nghe bài hát")
    ) {
      const songName =
        transcript.split("nghe bài hát")[1].trim() ||
        transcript.split("mở bài hát")[1].trim();
      window.open(
        `https://mp3.zing.vn/tim-kiem/bai-hat.html?q=${songName}`,
        "_blank"
      );
    } else if (transcript.includes("video")) {
      const videoName = transcript.split("video")[1].trim();
      window.open(
        `https://www.youtube.com/results?search_query=${videoName}`,
        "_blank"
      );
    } else {
      actionEl.textContent = "Không thực hiện được yêu cầu.";
      resultEl.textContent = "Không thể xử lý yêu cầu.";
    }
  }, 1000); // 1 giây chờ trước khi chuyển hướng
};

// Khi có lỗi xảy ra
recognition.onerror = function (event) {
  console.error("Lỗi nhận diện giọng nói: ", event.error);
  actionElement.textContent = "Lỗi nhận diện giọng nói. Vui lòng thử lại.";
  resultElement.style.display = "none"; // Ẩn phần tử kết quả khi lỗi xảy ra
};

// Khi nhấn nút để bắt đầu nhận diện giọng nói
btnEl.addEventListener("click", () => {
  actionEl.classList.remove("success");
  actionEl.textContent = "Hãy nói nội dung bạn muốn";
  resultEl.style.display = "none";
  recognition.start();
});
