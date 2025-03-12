document.addEventListener("DOMContentLoaded", function () {
    
let btn = document.getElementById("btnMenu")
let navbar = document.getElementById("navbar")
let contador = 1

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if(contador == 1){
        navbar.style.left = "0%"
        contador = 0
    }else{
        contador = 1
        navbar.style.left = "-100%"
    }
    
})

});