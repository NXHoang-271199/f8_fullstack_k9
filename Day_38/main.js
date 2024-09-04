const url = `http://localhost:3000/blogs`;
const root = document.querySelector('.root');
const limit = 5;
let page = 1;

const getBlogs = async (page,limit) => {
    try {
        const response = await fetch(`${url}?_page=${page}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu');
        }
        const data = await response.json();
        
        // Kiểm tra xem có còn bài viết để tải hay không
        if (data.length < limit) {
            hasMorePosts = false;
        }

        return data;
    } catch (e) {
        console.error('Error fetching data:', e);
        return [];
    }
};

getBlogs();

const renderBlogs = (blogs) => {
    blogs.forEach((blog) => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        blogPost.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
            <p><strong>Author</strong>${blog.author}</p>
        `;
        root.appendChild(blogPost);
    })
};

const loadBlogs = async () => {
    const blogs = await getBlogs(page, limit);
    renderBlogs(blogs);
}

const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - limit) {
        console.log(scrollTop,clientHeight,scrollHeight);
        
        page++;
        loadBlogs();
    } 
}

loadBlogs();

window.addEventListener("scroll", handleScroll);