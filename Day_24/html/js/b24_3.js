const data = [];

function register(name, password, email) {
    if (!name || !password || !email) {
        console.log("Please give us full information !");
        return;
    }

    var users = {
        name,
        password,
        email,
        role: "user",
    };
    
    // Thêm người dùng vào mảng data
    data.push(users);
    return users;
}

// Hàm login
function login(email, password) { 
    const user = data.find((user) => user.email === email && user.password === password);
    
    if (user) {
        return user;
    } else {
        console.log("invalid login information");
        return null;
    }
}

// Đăng ký người dùng:

var newUser1 = register("Nguyen Tat Dat", "123456", "ntd@gmail.com");

var dataLogin = login("ntd@gmail.com","123456")

console.log(data);
console.log(dataLogin);