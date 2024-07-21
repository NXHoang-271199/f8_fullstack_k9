var categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
  ]

// Hàm tạo các thẻ option từ mảng categories
function createOptions(categories, indent = "") {
  let options = "";
  categories.forEach((category) => {
    options += `<option value="{$category.id}">${indent}${category.name}</option>`
    if (category.children) {
      options += createOptions(category.children, indent + "--|");
    }
  });
  return options;
}

// Tạo các thẻ select và option
const selectElement = `
<select>
<option>Chọn chuyên mục</option>
${createOptions(categories)}
</select>`;

console.log(selectElement);

document.querySelector('body').innerHTML = selectElement;
