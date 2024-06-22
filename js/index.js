window.onload = function () {
    var images = document.querySelectorAll('.head3_lunbo a');
    var currentImageIndex = 0;

    function showImage(index) {
        images.forEach(function (img, idx) {
            img.style.display = (idx === index) ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex); // 初始显示第一张图片
    setInterval(nextImage, 1000); // 每3秒切换到下一张图片
}