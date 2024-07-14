const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];
  
  // Hàm tạo đối tượng mới với shortName
  function createCustomer({ name, age, address }) {
    const nameParts = name.split(" ");
    const shortName = `${nameParts[0]} ${nameParts[nameParts.length - 1][0]}`;
    return { name, age, address, shortName };
  }
  
  // Hàm tạo mảng mới và sắp xếp theo tuổi
  function createCustomers(customers) {
    return customers
      .map(createCustomer) // Tạo đối tượng mới cho từng khách hàng
      .sort((a, b) => a.age - b.age); // Sắp xếp theo tuổi
  }
  
  // Kết quả
  const result = createCustomers(customers);
  console.log(result);                                                                                         