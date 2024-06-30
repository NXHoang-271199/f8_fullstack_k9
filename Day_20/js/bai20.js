var content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut accusamus ut cumque exercitationem eaque 1500s.";

// Tách nội dung thành các từ
var keywords = content.split(" ");
var currentIndex = 0; // Biến chỉ số hiện tại trong từng từ

function updateText() {
    var newContent = "";

    // Duyệt qua từng từ trong mảng keywords
    for (var i = 0; i < keywords.length; i++) {
        if (i === currentIndex) {
            // Highlight từ hiện tại bằng cách bao quanh bởi thẻ <span>
            newContent += `<span style="color: red;">${keywords[i]}</span> `;
        } else {
            // Đưa từ còn lại vào newContent
            newContent += keywords[i] + " ";
        }
    }

    document.open(); // Mở một cửa sổ mới
    document.write(newContent); // Ghi nội dung đã highlight vào cửa sổ
    document.close(); // Đóng cửa sổ

    // Di chuyển chỉ số currentIndex sang phía trước
    currentIndex++;
    if (currentIndex >= keywords.length) {
        currentIndex = 0; // Nếu đã highlight hết từng từ, quay lại từ đầu
    }
}

// Gọi hàm updateText lần đầu tiên
updateText();

// Thiết lập để updateText được gọi liên tục theo interval
setInterval(updateText, 1000);


