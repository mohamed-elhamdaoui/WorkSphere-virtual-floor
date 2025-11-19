let addWorker = document.getElementById("addWorker");
let popup = document.getElementById("popup")
let close = document.getElementById("close")


addWorker.addEventListener("click", () => {
    popup.classList.remove("hidden")
    popup.parentElement.classList.remove("hidden")
    
// document.querySelector("main").classList.add("bg-black")
})

close.addEventListener("click", () => {
    popup.classList.add("hidden")
    popup.parentElement.classList.add("hidden")
    popup.parentElement.classList.add("hidden")
})

console.log()