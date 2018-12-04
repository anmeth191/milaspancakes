/*First this is the side nav for the respinsive design  */

let sidenav = document.querySelector('#sideBar');
let sideNavTrigger = document.querySelector('#sideNavLink');
let fullLayout = document.querySelector('#fullLayout');
let sideBarContent = document.querySelector('#sideBar__content');
let sideBarClose = document.querySelector('#iconClose');


sideNavTrigger.addEventListener('click' ,()=>{
    sidenav.classList.toggle('sideBarShow');
    sideBarContent.classList.toggle('sideBarContentt');
    fullLayout.classList.toggle('fullLayoutLeft');
    let linkSide = document.querySelectorAll('.linkSide'); 
    linkSide.forEach(element => {element.style.display = 'block'})

})

sideBarClose.addEventListener('click' , () => {
    sidenav.classList.toggle('sideBarShow');
    sideBarContent.classList.toggle('sideBarShow');
    fullLayout.classList.toggle('fullLayoutLeft'); 
    let linkSide = document.querySelectorAll('.linkSide');
   linkSide.forEach(element => {element.style.display = 'none'})
})


