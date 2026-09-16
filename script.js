const viewMoreBtn = document.getElementById('view-more-btn');
const hiddenBlogs = document.querySelectorAll(".hidden");

viewMoreBtn.addEventListener("click", function () {
    hiddenBlogs.forEach(function (blog) {
        blog.classList.remove("hidden");
    });

    viewMoreBtn.style.display = "none";
});