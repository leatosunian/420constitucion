const btnBarberia = document.querySelector("#btnBarberia")
const btnClub = document.querySelector("#btnClub")
const btnTienda = document.querySelector("#btnTienda")
const btnAsociate = document.querySelector("#btnAsociate")
const btnContacto = document.querySelector("#btnContacto")

window.addEventListener("scroll", e => {
    console.log(document.documentElement.scrollTop)
})

btnBarberia.addEventListener("click", e => {
    window.scrollTo({
        behavior: "smooth",
        top: 4470
    })
})

btnAsociate.addEventListener("click", e => {
    window.scrollTo({
        behavior: "smooth",
        top: 2110
    })
})

btnClub.addEventListener("click", e => {
    window.scrollTo({
        behavior: "smooth",
        top: 1098
    })
})

btnContacto.addEventListener("click", e => {
    window.scrollTo({
        behavior: "smooth",
        top: 4470
    })
})

btnTienda.addEventListener("click", e => {
    window.scrollTo({
        behavior: "smooth",
        top: 4470
    })
})



