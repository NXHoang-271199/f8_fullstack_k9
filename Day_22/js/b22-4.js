const article = [
    {
        title: "Tiêu đề bài viết 1",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium a odio debitis ut aspernatur omnis doloremque minus quisquam cum velit nostrum saepe voluptatibus aperiam dignissimos nobis facilis, quas iure.",
        image: "img/Demo.jpg"
    },
    
    {
        title: "Tiêu đề bài viết 2",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium a odio debitis ut aspernatur omnis doloremque minus quisquam cum velit nostrum saepe voluptatibus aperiam dignissimos nobis facilis, quas iure.",
        image: "img/Demo.jpg"
    },
    
    {
        title: "Tiêu đề bài viết 3",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat laudantium a odio debitis ut aspernatur omnis doloremque minus quisquam cum velit nostrum saepe voluptatibus aperiam dignissimos nobis facilis, quas iure.",
        image: "img/Demo.jpg"
    }
    
];

var articleContainer = document.getElementById("articles");

var contentHTML = "";

article.forEach(function (item) {
    
    contentHTML += `
        <div class="article">
            <div class="article-content">
                <h2>${item.title}</h2>
                <p>${item.content}</p>
            </div>
            <div class="article-image">
                <img src="${item.image}">
            </div>
        </div>
        `;
});
articleContainer.innerHTML = contentHTML;