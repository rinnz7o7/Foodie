let nav = document.querySelector(".header");
let scrollTop = document.querySelector(".scroll");

let headercontrol = new Waypoint({
    element: document.getElementById("about"),
    handler: function(direction) {
        if (direction === "down") {
            nav.classList.add("shadow")
            nav.classList.add("animate__slideInDown")
            scrollTop.style.display = "block"
            scrollTop.classList.add("animate__slideInUp")
        } else {
            nav.classList.remove("shadow")
            nav.classList.remove("animate__slideInDown")
            scrollTop.style.display = "none"
            scrollTop.classList.remove("animate__slideInUp")

        }
    },
    offset: '75%'
})
ScrollReveal({
    origin: "top",
    distance: "30 px",
    duration: 1000,
    reset: true,
}).reveal('.cc', {
    interval: 100
});