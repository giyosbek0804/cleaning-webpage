let textPart1 = document.querySelector(".text-part");
let imgPart = document.querySelector(".img-part");
let process = document.querySelector(".process");

function rearrange() {
    if (window.innerWidth > 1000) {
        textPart1.appendChild(process);
    }
    else {
        imgPart.appendChild(process)

    }
}
rearrange();
window.addEventListener("resize", rearrange);

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


let button1 = document.querySelectorAll(".flip");
button1.forEach(e => {
    let child = e.querySelector(".exit");
    let reveal = e.querySelector(".reveal")
    item(e, child, reveal);
})

let footer = document.querySelector("footer");
let requestQuote = footer.querySelector(".request-quote");
function footerMargin() {
    requestQuote.style.marginTop = `${-(requestQuote.clientHeight / 2)}px`;
    footer.style.marginTop = `${(requestQuote.clientHeight / 5) * 3}px`;
}

window.addEventListener("load", footerMargin);
window.addEventListener("resize", footerMargin);