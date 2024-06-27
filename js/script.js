const h1 = document.querySelector(".heading-primary");

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#") window.scrollTo({
            top: 0, behavior: "smooth",
        });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }

        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link")) headerEl.classList.toggle("nav-open");
    });
});


///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sideImage = document.querySelector(".side-images");
const icon = document.querySelector(".icon-mobile-nav");
const mainNav = document.querySelectorAll(".main-nav-link");


let down = false;
let navOpen = false;

btnNavEl.addEventListener("click", function () {

    headerEl.classList.toggle("nav-open");
    sideImage.classList.toggle("side-images--hide")
    // document.body.classList.toggle("block-vertical-scroll");

    icon.classList.toggle("color--light")
    icon.classList.toggle("color--dark")

    // headerEl.classList.toggle("color--light")

    // headerEl.classList.add("color--light")
    // mainNav.forEach(link => {
    //     // link.classList.remove("background--light")
    //     // link.classList.remove("background--light")
    //     link.classList.toggle("color--dark")
    //     link.classList.toggle("color--light")
    // })
    // console.log(headerEl.classList);

});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");

        icon.classList.remove("color--light")
        icon.classList.add("color--dark")

        headerEl.classList.add("background--light")


        mainNav.forEach(link => {
            link.classList.remove("color--light")
            link.classList.add("color--dark")
            // link.classList.add("background--light")
        })
    }

    if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
        icon.classList.add("color--light")
        icon.classList.remove("color--dark")

        headerEl.classList.remove("background--light")

        btnNavEl.classList.add("background--light")
        mainNav.forEach(link => {
            link.classList.remove("color--dark")
            link.classList.add("color--light")
        })
    }
}, {
    // In the viewport
    root: null, threshold: 0, rootMargin: "-80px",
});
obs.observe(sectionHeroEl);
