let images = [...document.querySelectorAll('.gallery__image')] , imageModal = document.querySelector('.galleryModal__photo--image');
let rightArrow = document.querySelector('#right') , leftArrow = document.querySelector('#left') , counter = 0;
let gallery = document.querySelector('#galeria') , galleryModal = document.querySelector('.galleryModal');
let iconClose = document.querySelector('#iconClose');

rightArrow.addEventListener('click' , () => {currentSlider(1)});
leftArrow.addEventListener('click' , () => { currentSlider(-1)});

function currentSlider(index){
counter = index + counter;

if(counter > images.length-1){counter = 0;};
if(counter < 0){counter = images.length-1;};
imageModal.src = images[counter].src;

}

gallery.addEventListener('click' , (event) => { 
    imageModal.src = event.target.src;
    galleryModal.style.display="grid";

})

galleryModal.addEventListener('click' , (event) => {
    if(event.target.classList.contains('galleryModal__icon') || event.target.classList.contains('galleryModal')){
        galleryModal.style.display="none";
    }
})
