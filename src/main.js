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



let details = document.querySelectorAll(".details");
details.forEach(e => {
  let summary = e.querySelector(".summary");
  let content = e.querySelector(".content")

  summary.addEventListener("click", () => {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    }
    else {
      document.querySelectorAll(".content").forEach(c => c.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + "px";
      const text = summary.textContent.toLowerCase();
      let armImg = document.querySelector(".arm")
      if (text.includes("regular cleaning")) {

        armImg.style.backgroundImage = "url('./src/images/arm.webp')";
      } else if (text.includes("deep cleaning")) {

        armImg.style.backgroundImage = "url('./src/images/red-instrument2.webp')";
      } else if (text.includes("move in-out cleaning")) {

        armImg.style.backgroundImage = "url('./src/images/purple-arm.webp')";
      }
    }
  })
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

// const counters = document.querySelectorAll(".score");
// const observer1 = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const el = entry.target;
//             const numberEl = el.querySelector(".number");
//             const target = parseFloat(el.getAttribute("data-target"));
//             let current = 0;
//             const duration = 2000;
//             const startTime = performance.now();

//             const updateCounter = (now) => {
//                 const elapsed = now - startTime;
//                 const progress = Math.min(elapsed / duration, 1);
//                 current = progress * target;

//                 numberEl.textContent = current.toFixed(1); // ✅ show 1 decimal place

//                 if (progress < 1) {
//                     requestAnimationFrame(updateCounter);
//                 } else {
//                     observer.unobserve(el); // stop after finishing
//                 }
//             };

//             requestAnimationFrame(updateCounter);
//         }
//     });
// }, { threshold: 0.5 });

// counters.forEach(counter => observer1.observe(counter));



let slides1 = [
  {
    img: "./src/images/guy1.webp",
    text: '“Clean Office, Happy Team! We’ve received nothing but compliments from both staff and clients on how clean and organized our office. It’s made such a difference in our workplace morale.”',
    commentName: "john doe",
    job: "Tech Global Co.",
    bgColor: "#fff",

  },
  {
    img: "./src/images/girl1.webp",
    text: '“Stress-Free and Sparkling Clean! I have never been more impressed with a cleaning service! It feels amazing to come home to a clean house without having to worry about it!”',
    commentName: "jane peterson",
    job: "home owner",
    bgColor: "#c1dbe4",
  },
  {
    img: "./src/images/guy2.webp",
    text: '“Professional and Detailed! Our office has never looked better! The cleaners are punctual, and their attention to high-traffic areas is exactly what we needed. Great value and service!”',
    commentName: "Carlo martinez",
    job: "Innovate Group",
    bgColor: "#c1e4c4",

  },
  {
    img: "./src/images/girl2.webp",
    text: '“Impeccable Service! We’ve been using this cleaning service for our office for over a year now, and the results are always impressive. Highly recommend!”',
    commentName: "jane roberts",
    job: "brightech co.",
    bgColor: "#fff",

  },
  {
    img: "./src/images/guy3.webp",
    text: '"A Life-Changer for Our Home! As a busy dad, keeping up with the housework can be overwhelming, but this cleaning service has been a lifesaver and the team is so friendly and respectful.”',
    commentName: "mark harrison",
    job: "home owner",
    bgColor: "#c1dbe4",

  },
  {
    img: "./src/images/girl3.webp",
    text: '“Thorough and Trustworthy! I was hesitant to hire a cleaning service, but after seeing the results, I’m so glad I did. They take care of my house with such care.”',
    commentName: "Rachel Davis",
    job: "home owner",
    bgColor: "#c1e4c4",

  },
];


// let corouselHTML = "";

// slides.forEach(slide => {
//     corouselHTML += `
//             <div class="flex border flex-col slide flex-shrink-0  pb-[calc(2rem+1.5vw)]  font-light text-[clamp(1rem,1.2vw,3rem)] w-full sm:w-[calc(10rem+12vw)] min-w-[200px] my-[calc(2rem+2vw)]" style="background-color:${slide.bgColor}">

//               <img src="${slide.img}"
//          class="w-[calc(4rem+4vw)] h-[calc(4rem+4vw)] object-cover rounded-full translate-y-[-50%]"
//          alt="girl1">
//   <p class="mt-[calc(1.2rem+1vw)] text-center w-[90%]  translate-y-[-25%]">
//     ${slide.text}
//   </p>

//   <p class="flex flex-col items-center  justify-center ">
//     <span>${slide.commentName}</span>
//     <span>${slide.job}</span>
//   </p>
// </div>
//     `
// });
// document.querySelector(".showRoom").innerHTML = corouselHTML;


// let showRoom = document.querySelector(".showRoom");
// console.log(showRoom.children[2]);
// // showRoom.children[2].style.background = "red";

// function slice(size) {
//     for (let i = 0; i < showRoom.children.length; i++) {


//         if (i >= 3) {
//             showRoom.children[i].style.transform = "translateX(100%)"
//         } else {

//             showRoom.children[i].style.width = ` ${showRoom.clientWidth / 4.4}px`;
//         }

//     }
// }
// slice(3)


// let first = document.querySelector(".first");

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



