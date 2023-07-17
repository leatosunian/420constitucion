document.addEventListener("DOMContentLoaded", e => {
    scrollFunction()
})

const scrollFunction = () => {
    const btnBarberia = document.querySelector("#btnBarberia")
    
    window.addEventListener("scroll", e => {
        console.log(document.documentElement.scrollTop)

    })
    
    document.addEventListener("click", e => {
        window.scrollTo({
            behavior: "smooth",
            top: 4670
        })
    })
}


