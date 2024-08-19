//file selector
var newBtn = document.querySelector("#new-btn");
var txtBtn = document.querySelector("#txt-btn");
var pdfBtn = document.querySelector("#pdf-btn");
// document event button
var boldBtn = document.querySelector("#bold-btn");
var underlineBtn = document.querySelector("#underline-btn");
var italicBtn = document.querySelector("#italic-btn");
var colorBtn = document.querySelector("#color-btn");

var content = document.querySelector(".content");
var filenameInput = document.querySelector("#filename-input");

var charCount = document.querySelector(".char-count span");
console.log(charCount);

var wordCount = document.querySelector(".word-count span");
// console.log(wordCount);

newBtn.addEventListener("click", function (e) { 
    content.innerHTML = null;
    filenameInput.value = "untitled";
})

txtBtn.addEventListener("click", function (e) { 
    var text = content.innerText;
    var fileName = `${filenameInput.value} .txt`;
    const blob = new Blob([text], { type: "text/plain" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

pdfBtn.addEventListener("click", function (e) {
    var fileName = `${filenameInput.value} .pdf`;
    html2pdf().from(content).set({
        fileName: fileName
    }).save();
});

boldBtn.addEventListener("click", function (e) { 
    document.execCommand("bold");
});

underlineBtn.addEventListener("click", function (e) { 
    document.execCommand("underline");
});

italicBtn.addEventListener("click", function (e) { 
    document.execCommand("italic");
});

colorBtn.addEventListener("input", function (e) { 
    console.log(e);
    
    document.execCommand("forecolor",false,e.target.value);
});


var updateCounts = function () { 
    var text = content.innerText;
    
    // Loại bỏ các ký tự khoảng trắng ở đầu và cuối văn bản
    var trimmedText = text.trim();
    
    // Loại bỏ tất cả các khoảng trắng để đếm số ký tự không bao gồm khoảng trắng
    var charOnlyText = trimmedText.replace(/\s+/g, '');
    
    // Đếm số ký tự không bao gồm khoảng trắng
    var chars = charOnlyText.length;
    
    // Đếm số từ bằng cách tách chuỗi thành mảng từ dựa trên khoảng trắng
    var words = trimmedText.split(/\s+/).filter(Boolean).length;

    // Cập nhật số ký tự và số từ vào phần tử HTML
    charCount.innerText = chars;
    wordCount.innerText = words;
};


content.addEventListener("input", updateCounts);


content.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 


        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<br>"; 
        content.appendChild(newDiv);


        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(newDiv, 0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
});


content.addEventListener("keydown", function(event) {
    if ((event.key === "Backspace" || event.key === "Delete") && content.innerHTML.trim() === "") {
        event.preventDefault(); 

        
        var span = document.createElement("span");
        span.innerText = "Start typing here...";
        content.appendChild(span);
        
       
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(span, 0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
});