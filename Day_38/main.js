const url = `https://xqywg2-8080.csb.app/blogs`;
const root = document.querySelector('.root');
const loading = document.querySelector('.loading');
const limit = 5;
let page = 1;
let isLoading = false; // Trạng thái để tránh gọi API nhiều lần

async function fetchPosts(page, limit) {
    try {
        const response = await fetch(`https://xqywg2-8080.csb.app/blogs?_page=${page}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
        return [];
    }
}

function renderBlogs(blogs) {
    blogs.forEach((blog) => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        blogPost.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
            <p><strong>Author: </strong>${blog.author}</p>
        `;
        root.appendChild(blogPost);
    });
}

async function loadBlogs() {
    if (isLoading) return; // Nếu đang tải, không thực hiện thêm lần nữa
    isLoading = true;
    loading.style.display = 'block'; // Hiển thị loading

    const blogs = await fetchPosts(page, limit);
    renderBlogs(blogs);

    loading.style.display = 'none'; // Ẩn loading
    isLoading = false;
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) { // Thay vì `limit` bạn nên dùng một giá trị nhỏ như `5`
        page++;
        loadBlogs();
    }
}

window.addEventListener("scroll", handleScroll);

// Gọi lần đầu để tải trang ban đầu
loadBlogs();
