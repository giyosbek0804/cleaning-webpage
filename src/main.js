import './style.css'

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

const bg = document.querySelector(".hero-bg-img");
let text = document.querySelector(".describe");
let h1 = document.querySelector(".hero h1");


h1.style.transform = " rotateX(-80deg)";
text.style.transform = "scale(.75)";
bg.style.transform = "scale(1.5)";
nav.style.opacity = "0";
document.addEventListener("DOMContentLoaded", () => {
  // trigger animation AFTER first paint
  requestAnimationFrame(() => {
    bg.style.transform = "scale(1)";
    nav.style.opacity = "1";
    h1.style.transform = " rotateX(0deg)";
    text.style.transform = "scale(1)";
  });
});
let slideInL = document.querySelectorAll(".slide-in-l");
let slideInR = document.querySelectorAll(".slide-in-r");
let slideOutL = document.querySelectorAll(".slide-out-l");
let slideOutR = document.querySelectorAll(".slide-out-r");
let slideUp = document.querySelectorAll(".slide-up");
let flipOver = document.querySelectorAll(".flip-over");
let fadeIn = document.querySelectorAll(".fade-in");
let trigger = document.querySelectorAll(".wave");
let line = document.querySelectorAll(".line")



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
[...slideInL, ...slideInR, ...flipOver, ...fadeIn, ...trigger, ...slideUp, ...slideOutL, ...slideOutR, ...line].forEach(el => observer.observe(el));


const armImages = [
  "/images/arm.webp",
  "/images/red-instrument2.webp",
  "/images/purple-arm.webp"
];

const preloadedArms = armImages.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});


let details = document.querySelectorAll(".details");
details.forEach(e => {
  let summary = e.querySelector(".summary");
  let content = e.querySelector(".content")

  summary.addEventListener("click", () => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      document.querySelectorAll(".content").forEach(c => c.style.maxHeight = null);
      content.style.maxHeight = content.scrollHeight + "px";

      const text = summary.textContent.toLowerCase();
      let armImg = document.querySelector(".arm");

      if (text.includes("regular cleaning")) {
        armImg.style.backgroundImage = `url('${preloadedArms[0].src}')`;
      } else if (text.includes("deep cleaning")) {
        armImg.style.backgroundImage = `url('${preloadedArms[1].src}')`;
      } else if (text.includes("move in-out cleaning")) {
        armImg.style.backgroundImage = `url('${preloadedArms[2].src}')`;
      }
    }
  });

  window.addEventListener("click", (e) => {
    if (!summary.contains(e.target) && !content.contains(e.target)) {
      content.style.maxHeight = null;
    }
  });
})


let textPart = document.querySelector(".text-part");
let imgPart = document.querySelector(".img-part");
let process = document.querySelector(".process");



function rearrange() {
  if (window.innerWidth > 1000) {
    textPart.appendChild(process);
  }
  else {
    imgPart.appendChild(process)
  }
}
rearrange();
window.addEventListener("resize", rearrange);







let hoverDiv = document.querySelectorAll(".hoverDiv");
hoverDiv.forEach(e => {
  let darkArrow = e.querySelector(".darkArrow");
  let whiteArrow = e.querySelector(".whiteArrow");
  e.addEventListener("mouseover", () => {
    darkArrow.classList.toggle("hovered");
    whiteArrow.classList.toggle("hovered");
  })

})


let question = document.querySelectorAll(".question");
question.forEach(e => {
  let rotateMinus = e.querySelector(".rotate");
  let detail = e.querySelector(".detail");
  e.addEventListener("click", () => {
    rotateMinus.style.transform = rotateMinus.style.transform === "rotate(-90deg)" ? "rotate(0deg)" : "rotate(-90deg)";
    detail.style.maxHeight = detail.style.maxHeight ? null : detail.scrollHeight + "px";
    detail.classList.toggle("pt-[calc(.8rem+.8rem)]");
  })
})

let footer = document.querySelector("footer");
let requestQuote = footer.querySelector(".request-quote");
function footerMargin() {
  requestQuote.style.marginTop = `${-(requestQuote.clientHeight / 2)}px`;
  footer.style.marginTop = `${(requestQuote.clientHeight / 5) * 3}px`;
}

window.addEventListener("load", footerMargin);
window.addEventListener("resize", footerMargin);



