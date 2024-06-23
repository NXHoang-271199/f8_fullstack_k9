n = 8;
var chessBoard = '';
    chessBoard += '<table border="1">'
for (var row = 0; row <= n; row++) { 
    chessBoard += '<tr>'
    for (var col = 0; col <= n; col++) {
        // chessBoard += '<tr>'
        if ((row + col) % 2 === 0) {
           chessBoard += '<td style="background-color: #fff"; width="50px"; height="50px"; "></td>';
        } else {
           chessBoard += '<td style="background-color: #000"; width="50px"; height="50px"; "></td>'; 
        }      
        
    }
chessBoard += '</tr>'
}

chessBoard+='</table>'
document.write(chessBoard);