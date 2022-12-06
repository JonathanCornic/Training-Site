const logomenu = document.querySelector(".logomenuimg");
const contitems = document.querySelector(".contitems");
const arritems = document.querySelectorAll(".items");

logomenu.addEventListener("click", () => {
    if(contitems.className === "contitems") {

        contitems.className += " responsive";
        logomenu.style.width = "30px";
        logomenu.style.top = "5px";
        logomenu.src = "ressources/close.svg";
    } else {

        contitems.className = "contitems";
        logomenu.style.width = "30px";
        logomenu.style.top = "13px";
        logomenu.src = 'ressources/menu.svg';

    }
})

arritems.forEach(item => {

    item.addEventListener('click', () => {

        contitems.className = "contitems";
        logomenu.src = 'ressources/menu.svg';
        
    })

})
