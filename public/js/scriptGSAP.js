gsap.registerPlugin(ScrollToPlugin);

const seriesSection = document.querySelector("#series");
const aboutSection = document.querySelector("#about");
const contactSection = document.querySelector("#contact");

seriesSection.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".series" });
})

aboutSection.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".about" });
})

contactSection.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: ".contact" });
})




