//file selector
var newBtn = document.querySelector("#new-btn");
var txtBtn = document.querySelector("#txt-btn");
var pdfBtn = document.querySelector("#pdf-btn");
// document event button
var boldBtn = document.querySelector("#bold-btn");
var underlineBtn = document.querySelector("#underline-btn");
var italicBtn = document.querySelector("#italic-btn");
var colorBtn = document.querySelector("#color-btn");

var content = document.querySelector("#content");
var filenameInput = document.querySelector("#filename-input");

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