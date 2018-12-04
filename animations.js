//gathering variables for elements and apply the animations

let showcaseTitle = document.querySelector('#showcaseTitle') , showcaseSubTitle = document.querySelector('#showcaseSubTitle');

showcaseTitle.style.animationName = 'fadeInTop';
showcaseSubTitle.style.animationName = 'opacityAnimation';


window.onscroll = function(){

let firstSectionContent = document.querySelector('.firstSection__content') , firstSectionImages = document.querySelector('.firstSection__images');
if(pageYOffset > firstSectionContent.offsetTop-500){ firstSectionContent.style.animationName = 'fadeInLeft';
firstSectionImages.style.animationName = 'opacityAnimation'; }


//animation for the second section of the website 
let review1 = document.querySelector('#review1') , review2 = document.querySelector('#review2') , review3 = document.querySelector('#review3');
if(pageYOffset > review1.offsetTop-500){review1.style.animationName = 'fadeInBottom'; }
if(pageYOffset > review2.offsetTop-600){ review2.style.animationName ='fadeInBottom'; }
if(pageYOffset > review3.offsetTop-600){review3.style.animationName ='fadeInBottom';}


//animation for the third section of the website 

let thirdSection = document.querySelector('#menuResponsive');
if(pageYOffset > thirdSection.offsetTop-350){thirdSection.style.animationName='opacityAnimation';}

//contact section animation website 

let contact = document.querySelector('#contacto');
if(pageYOffset > contact.offsetTop-350){contact.style.animationName='opacityAnimation';}


//animation for the gallery section

let photoModal = document.querySelector('#photoModal');
photoModal.style.animationName="opacityAnimation";




}