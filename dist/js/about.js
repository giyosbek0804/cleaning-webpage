let nav = document.querySelector("nav");
let ul = nav.querySelectorAll("ul");
let hamburger = nav.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    ul.forEach(ul => {
        
        // ul.classList.toggle("show")
        console.log(ul);
        
        if (ul.classList.contains("show")) {
            document.querySelector("body").style.overflow = "hidden";
            ul.classList.add("show");
        }
        else {
            document.querySelector("body").style.overflow = "visible"
            ul.classList.remove("show");
        }
    })
})
// img scale and fade in animation js part ; 2nd section
window.addEventListener("scroll", () => {
    const img = document.querySelector(".zoom-img"); // ✅ class selector
    if (!img) return; 

    const scrollY = window.scrollY;
    const imgPosInfo = img.getBoundingClientRect();
    const imgTop = -imgPosInfo.top;
    const imgHeight = imgPosInfo.height;
    const imgPosPercent = (imgTop / imgHeight) * 100;
    imgPosPercent > 78 ? img.style.opacity = `${1 - (imgPosPercent / 100)}` : img.style.opacity = "1";

    ;

    if (scrollY > 200) {
        // img.style.background = "red"
        const scale = 1 + scrollY / 5000; // adjust 1000 to control zoom speed
        img.style.transform = `scale(${scale})`;

    } else {
        img.style.transform = `scale(1)`;
    }

});



// animations with sections when enters viewport
const bg = document.querySelector(".hero-bg-img");
let text = document.querySelector(".describe");
let h1 = document.querySelector(".hero h1");


// h1.style.transform = " rotateX(-80deg)";
// text.style.transform = "scale(.75)";
// bg.style.transform = "scale(1.5)";
document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
        bg.style.transform = "scale(1)";
        h1.style.transform = " rotateX(0deg)";
        text.style.transform = "scale(1)";
    });
});

let scaleDown = document.querySelectorAll(".scale-down");
let slideInR = document.querySelectorAll(".slide-inR");
let slideY = document.querySelectorAll(".slide-y");
let flipX = document.querySelectorAll(".flip-x");
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
[...slideInR, ...flipX, ...scaleDown, ...trigger, ...slideY, ...line].forEach(el => observer.observe(el));

// let scaleUp = document.querySelector(".scale-up");

document.addEventListener("DOMContentLoaded", () => {
    const scaleUp = document.querySelector(".scale-up");
    if (!scaleUp) return;

   
    requestAnimationFrame(() => {
        scaleUp.style.transform = "scale(1)";
    });
});


// footer js section
let footer = document.querySelector("footer");
let requestQuote = footer.querySelector(".request-quote");
function footerMargin() {
    requestQuote.style.marginTop = `${-(requestQuote.clientHeight / 2)}px`;
    footer.style.marginTop = `${(requestQuote.clientHeight / 5) * 3}px`;
}

window.addEventListener("load", footerMargin);
window.addEventListener("resize", footerMargin);


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


// card creator
let corouselHtml = "";
function corouselPush(img, name, jobPosition, text) {
    corouselHtml += `
              <div class="flex   duration-300 snap-center   flex-col items-center my-[calc(1rem+1vw)] sm:my-0  justify-center w-full   sm:w-[calc(20rem+10vw)] md:w-[calc(15rem+8vw)] lg:w-[calc(12rem+10vw)] 3xl:w-[calc(12rem+15vw)]  text-center mx-0 sm:mx-[calc(1rem+1vw)] shrink-0 ">
            <img loading="lazy"  class="w-full h-auto rounded-[50px]" src="${img}" alt="">
            <h1 class="capitalize text-[clamp(2.1rem,2.7vw,4.5rem)] mt-[calc(1rem+1vw)]">amy lee</h1>
            <p class="text-[clamp(.9rem,.95vw,2.2rem)] uppercase tracking-widest  my-[calc(.5rem+.4vw)] ">${jobPosition}</p>
            <p class="text-[clamp(1.05rem,1.1vw,3rem)] w-[80%] tracking-wide first-letter:uppercase">${name.split(" ")[0] + text} </p>
                <p class="flex items-center justify-center w-full py-[calc(.8rem+.8vw)] ">
      <a href="https://www.youtube.com/" class="px-[calc(.3rem+.2vw)] ">
        <img  loading="lazy" class="h-auto w-[calc(1.4rem+1vw)]   md:w-[calc(1rem+.5vw)] 3xl:w-[calc(1.7rem+1vw)] " src="../images/youtube.png" alt="youtube">
      </a >
      <a href="https://www.instagram.com/" class="px-[calc(.3rem+.2vw)] ">
        <img loading="lazy" class="h-auto w-[calc(1.4rem+1vw)]  md:w-[calc(1rem+.5vw)] 3xl:w-[calc(1.7rem+1vw)] "  src="../images/insta.png" alt="instagram">
      </a>
      <a href="https://www.tiktok.com/" class="px-[calc(.3rem+.2vw)] ">
        <img  loading="lazy" class="h-auto w-[calc(1.4rem+1vw)]  md:w-[calc(1rem+.5vw)] 3xl:w-[calc(1.7rem+1vw)] cursor-pointer"  src="../images/tictok.png" alt="tiktok">
      </a>
    </p>
          </div>
    `
}
corouselPush("../images/cleaner1.webp", "amy lee", "Cleaning Specialist", " ensures every space is spotless and clean.")
corouselPush("../images/cleaner2.webp", "eva kim", "Sanitation Technician", " provides top-notch disinfection services.")
corouselPush("../images/cleaner3.webp", "Ana Cole", "Residential CleaneR", " is known for her meticulous cleaning.")
corouselPush("../images/cleaner4.webp", "Lily Ray", "Quality Inspector", " oversees highest quality control.")

let corousel = document.querySelector(".corousel");
corousel.innerHTML = corouselHtml;



