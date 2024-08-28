document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".box");
    const img = document.querySelector(".img");
    const zoomBox = document.querySelector(".zoom-box");
    const zoomLens = document.querySelector(".zoomlens");
    const zoomImage = document.getElementById("zoomImage");

    // Hiển thị khi chuột vào box
    box.addEventListener("mouseenter", function () {
        zoomLens.style.display = "block";
        zoomBox.style.display = "block";
        zoomImage.src = img.src; // Đảm bảo ảnh phóng to sử dụng cùng một ảnh với ảnh gốc
    });

    // Tính toán vị trí kính lúp và zoom
    box.addEventListener("mousemove", function (e) {
        const { offsetX, offsetY } = e;  // Sử dụng offsetX và offsetY để lấy vị trí của chuột trong box
        const lensWidth = zoomLens.offsetWidth;
        const lensHeight = zoomLens.offsetHeight;

        // Tính toán vị trí của kính lúp
        let lensX = offsetX - (lensWidth / 2);
        let lensY = offsetY - (lensHeight / 2);

        // Đảm bảo kính lúp không vượt qua biên
        lensX = Math.max(0, Math.min(box.offsetWidth - lensWidth, lensX));
        lensY = Math.max(0, Math.min(box.offsetHeight - lensHeight, lensY));

        zoomLens.style.left = `${lensX}px`;
        zoomLens.style.top = `${lensY}px`;

        // Tính toán tỷ lệ của kính lúp trong box
        const percentX = lensX / (box.offsetWidth - lensWidth);
        const percentY = lensY / (box.offsetHeight - lensHeight);

        // Điều chỉnh vị trí của ảnh phóng to dựa trên tỷ lệ này
        const maxZoomX = zoomImage.offsetWidth - zoomBox.offsetWidth;
        const maxZoomY = zoomImage.offsetHeight - zoomBox.offsetHeight;

        zoomImage.style.left = `-${percentX * maxZoomX}px`;
        zoomImage.style.top = `-${percentY * maxZoomY}px`;
    });

    // Ẩn kính lúp và ảnh phóng to khi chuột ra ngoài box
    box.addEventListener("mouseleave", function () {
        zoomLens.style.display = "none";
        zoomBox.style.display = "none";
    });
});
