let nav = document.querySelector("nav");
let ul = nav.querySelector("ul");
let hamburger = nav.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    ul.classList.toggle("show");
    if (ul.classList.contains("show")) {
        document.querySelector("body").style.overflow = "hidden"
    }
    else {
        document.querySelector("body").style.overflow = "visible"
    }
})



document.addEventListener("DOMContentLoaded", () => {
    const slideXLeft = document.querySelectorAll(".slide-x-left");
    const slideXRight = document.querySelectorAll(".slide-x-right");
    slideXLeft.forEach(el => {
        requestAnimationFrame(() => {
            el.style.transform = "translateX(0)";
            el.style.opacity = "1";
        });
    })
    slideXRight.forEach(el2 => {
        requestAnimationFrame(() => {
            el2.style.transform = "translateX(0)";
            el2.style.opacity = "1";
        });
    })
});


let slideY = document.querySelectorAll(".slide-y");
let flipY = document.querySelectorAll(".flip-y");
let line = document.querySelectorAll(".line");
let slideSideL = document.querySelectorAll(".slide-side-l");
let slideSideR = document.querySelectorAll(".slide-side-r");



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            setTimeout(() => {

                observer.unobserve(entry.target);
            }, 5000);
        }


    });
}, {
    threshold: 0.1
});

// observe all
[...slideY, ...line, ...slideSideL, ...slideSideR, ...flipY].forEach(el => observer.observe(el));


// button flip animations
function item(button, child, reveal) {
    button.addEventListener("mouseover", () => {
        child.style.transform = "translateY(-30px) rotateX(90deg)";
        reveal.style.transform = "translateY(26%)";
    })
    button.addEventListener("mouseleave", () => {
        child.style.transform = "translateY(0px) rotateX(0deg)";
        reveal.style.transform = "translateY(200%)";
    })
}
let button = document.querySelectorAll(".flip");
button.forEach(e => {
    let child = e.querySelector(".exit");
    let reveal = e.querySelector(".reveal")
    item(e, child, reveal);
})

let li = document.querySelectorAll("nav li");
li.forEach(e => {
    let main = e.querySelector(".exit");
    let animate = e.querySelector(".reveal");
    e.addEventListener("mouseover", () => {
        main.style.transform = "translateY(-30px) rotateX(90deg)";
        animate.style.transform = "translateY(0%)";
    })
    e.addEventListener("mouseleave", () => {
        main.style.transform = "translateY(0px) rotateX(0deg)";
        animate.style.transform = "translateY(80%)";
    })
})


let question = document.querySelectorAll(".question");
question.forEach(e => {
    let rotateMinus = e.querySelector(".rotate");
    let detail = e.querySelector(".detail");
    e.addEventListener("click", () => {
        rotateMinus.style.transform = rotateMinus.style.transform === "rotate(-90deg)" ? "rotate(0deg)" : "rotate(-90deg)";
        detail.style.maxHeight = detail.style.maxHeight ? null : detail.scrollHeight + "px";
        // detail.classList.toggle("pt-[calc(.8rem+.2vw)]");
        e.style.marginBottom= e.style.marginBottom ? null : "calc(1rem + .7vw";
    })
})