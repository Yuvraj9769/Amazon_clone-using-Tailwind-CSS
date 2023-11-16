let srl = document.getElementById("srl");
let pvr = document.getElementById("pvr");
let nxt = document.getElementById("nxt");
let webtop = document.getElementById("webtop");
pvr.addEventListener("click", (e) => {
    e.preventDefault();
    srl.scrollLeft -= srl.clientWidth;
})
nxt.addEventListener("click", (e) => {
    e.preventDefault();
    srl.scrollLeft += srl.clientWidth;
})
webtop.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "amazonclone.html";
})