document.addEventListener("DOMContentLoaded", function () {
    const afterScroll = document.querySelector(".afterscroll");
    const paragraphs = document.querySelectorAll(".afterscroll p");

    let lastScrollTop = 0; // Store the last scroll position

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;

        if (scrollTop > 50) { 
            afterScroll.classList.add("show"); // Show h1 when scrolling down
        } else {
            afterScroll.classList.remove("show"); // Hide everything when scrolling up
        }

        if (scrollTop > 200) { 
            afterScroll.classList.add("show-text"); // Show paragraphs when scrolling further
        } else {
            afterScroll.classList.remove("show-text"); // Hide paragraphs when scrolling up
        }

        lastScrollTop = scrollTop; // Update the last scroll position
    });
});
