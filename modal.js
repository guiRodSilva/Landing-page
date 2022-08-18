const buttonShow = document.querySelectorAll(".buttonShow")
const modal = document.querySelector(".modal")
const modalLogin = document.querySelector(".modal-login")

buttonShow.forEach(button =>{
    button.addEventListener("click", () =>{
        modal.classList.add("active")
        modalLogin.classList.add("active")
    })
})


//When I click in the X button
document.querySelector(".close-modal").addEventListener("click", () =>{
    modal.classList.remove("active")
    modalLogin.classList.remove("active")
    document.querySelector("body").style.overflow = "initial"
})
