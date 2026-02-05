document.querySelector(".loading").addEventListener("animationend", () => {
    const loader = document.querySelector(".loadingpage");
    loader.style.display = "none";
    const homePage = document.querySelector(".body");
    homePage.style.display = "flex";
});
document.querySelector('.nav-actions').addEventListener('click', (e) => {
    if (e.offsetX > e.currentTarget.offsetWidth - 40) {
        openNav();
    }
});

function howItWorksHover(num){
    document.querySelector(".step"+num).addEventListener('mouseenter', () =>{
        document.querySelector(".text-step"+num).style.color="blue";
    })
    document.querySelector(".step"+num).addEventListener('mouseleave', () =>{
        document.querySelector(".text-step"+num).style.color="";
    })
}
howItWorksHover(1);
howItWorksHover(2);
howItWorksHover(3);
howItWorksHover(4);

function openNav() {
    document.getElementById("side-menu").style.width = "300px";
    document.getElementById("overlay").style.display = "block";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}