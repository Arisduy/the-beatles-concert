document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector("nav").offsetHeight,
                behavior: "smooth"
            });
        });
    }
});
