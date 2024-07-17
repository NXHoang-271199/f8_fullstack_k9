var array = [
    { id: 1, name: "Chuyên mục 1", parent: 0 },
    { id: 2, name: "Chuyên mục 2", parent: 0 },
    { id: 3, name: "Chuyên mục 3", parent: 0 },
    { id: 4, name: "Chuyên mục 2.1", parent: 2 },
    { id: 5, name: "Chuyên mục 2.2", parent: 2 },
    { id: 6, name: "Chuyên mục 2.3", parent: 2 },
    { id: 7, name: "Chuyên mục 3.1", parent: 3 },
    { id: 8, name: "Chuyên mục 3.2", parent: 3 },
    { id: 9, name: "Chuyên mục 3.3", parent: 3 },
    { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
    { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
  ];
  
  // Tạo một map để lưu trữ các phần tử theo id
  var map = {};
  
  // Tạo một mảng để lưu trữ kết quả
  var categories = [];
  
  // Tạo các đối tượng trong map và thêm chúng vào các danh sách cha con
  array.forEach(function(item) {
    map[item.id] = { ...item };
    map[item.id].children = [];
  });
  
  // Gán phần tử vào đúng cha của nó
  array.forEach(function(item) {
    if (item.parent === 0) {
      categories.push(map[item.id]);
    } else {
      if (map[item.parent]) {
        map[item.parent].children.push(map[item.id]);
      }
    }
  });
  
  console.log(categories);
  