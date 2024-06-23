
var result = "";
document.write(`<h1 style="text-align:center;">Bảng cửu chương</h1>`);
document.write('<div class="container">')
for (var i = 1; i <= 9; i++) {
    document.write('<div style="width:20%;">')
    document.write(`<h5> Bảng số ${i}</h5>`)
    for (var j = 1; j <= 10; j++) {
        result = `<p>${i} x ${j} = ${i * j}</p>`;
        document.write(`${result}`);
        
    }
    document.write('</div>');
}
document.write('</div>');
