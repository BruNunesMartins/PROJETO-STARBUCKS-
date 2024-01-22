let copoVerde = document.querySelector(".copo1")
let copoAmarelo = document.querySelector(".copo2")
let copoRosa = document.querySelector(".copo3")
let copoGrande = document.querySelector(".imagemG")
let circulo = document.querySelector(".circulo")


    
copoVerde.addEventListener("click", () => {
    copoGrande.src = "./img/img1.png"
    circulo.style.background = "#017143"

})


copoAmarelo.addEventListener("click", () => {
    copoGrande.src = "./img/img2.png"
    circulo.style.background = "#eb7495"
})

copoRosa.addEventListener("click", () => {
    copoGrande.src = "./img/img3.png"
    circulo.style.background = "#d752b1"
})






