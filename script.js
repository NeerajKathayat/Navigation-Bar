const Hamburger = document.querySelector("#Hamburger")
const container = document.querySelector(".container")
const hide = document.querySelector("#cross")
Hamburger.addEventListener("click",()=>{
   container.style.display="flex"
})


hide.addEventListener("click",()=>{
    container.style.display="none"
})