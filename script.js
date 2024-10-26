document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});