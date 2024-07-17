// Hàm định dạng số thành chuỗi với dấu phẩy phân cách hàng nghìn
function formatNumberWithCommas(number) {
    // Ép kiểu số thành chuỗi
    var numStr = number.toString();
    var result = '';
    var count = 0;
  
    // Duyệt từ phải sang trái để thêm dấu phẩy
    for (var i = numStr.length - 1; i >= 0; i--) {
      result = numStr[i] + result;
        count++;
        // console.log(result);
      if (count === 3 && i !== 0) {
        result = ',' + result;
        count = 0;
      }
    }
  
    return result;
  }
  
  // Định nghĩa phương thức getCurrency cho Number
  Number.prototype.getCurrency = function(currency) {
    return formatNumberWithCommas(this) + ' ' + currency;
  };
  
  // Định nghĩa phương thức getCurrency cho String
  String.prototype.getCurrency = function(currency) {
    // Ép kiểu chuỗi sang số trước khi định dạng
    var number = parseFloat(this);
    if (isNaN(number)) {
      return 'Error: Invalid number';
    }
    return formatNumberWithCommas(number) + ' ' + currency;
  };
  
  // Ví dụ sử dụng phương thức getCurrency
  var price1 = 120000;
  console.log(price1.getCurrency('đ'));
  
  var price2 = "120000000";
  console.log(price2.getCurrency('đ')); 
  
  var invalidPrice = "not a number";
  console.log(invalidPrice.getCurrency('đ')); 