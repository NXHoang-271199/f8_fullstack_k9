var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        symbol: "Email phải có ký tự @",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
};

function getError(field) {
    // Tách field và lỗi cụ thể (nếu có)
    var parts = field.split('.'); // parts[0] là tên nhóm lỗi, parts[1] là tên lỗi cụ thể
    var fieldName = parts[0]; // tên nhóm lỗi
    var specificError = parts[1]; // tên lỗi cụ thể
    // Lấy nhóm lỗi tương ứng
    var fieldErrors = errors[fieldName];

    // Nếu chỉ định lỗi cụ thể, trả về lỗi đó nếu có
    if (specificError) {
        return fieldErrors[specificError] || '';
    }

    // Nếu không có lỗi cụ thể, trả về lỗi "required" nếu có
    if (fieldErrors.required) {
        return fieldErrors.required;
    }

    // Trả về lỗi đầu tiên tìm được
    for (var key in fieldErrors) {
        if (fieldErrors[key]) {
            return fieldErrors[key];
        }
    }

    return '';
}

console.log(getError('name'));
console.log(getError('name.min'));
console.log(getError('email')); 
console.log(getError('email.unique'));