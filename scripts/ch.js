const galleryItemsBlabla = document.querySelectorAll('.Blabla__gallery .gallery__item');
const buttonsBlabla = document.querySelectorAll('.Blabla__button');
function galleryBlabla (count, pol) {
	for(let i = 0; i < galleryItemsBlabla.length; i++){
	if (i == count){
		galleryItemsBlabla[i].classList.add("_active");
		if(pol){
			galleryItemsBlabla[i-1].classList.remove("_active")
		}else if(!pol){
			galleryItemsBlabla[i+1].classList.remove("_active")
		}
	} 
}
}
let countOfBlablaItems = 0;
buttonsBlabla[1].addEventListener('click', function (e) {
	countOfBlablaItems++;
	if(countOfBlablaItems>(galleryItemsBlabla.length-1)) countOfBlablaItems=(galleryItemsBlabla.length-1);
	galleryBlabla(countOfBlablaItems, 1);
});
buttonsBlabla[0].addEventListener('click', function (e) {
	countOfBlablaItems--;
	if(countOfBlablaItems<0) countOfBlablaItems=0;
	galleryBlabla(countOfBlablaItems, 0);

});
galleryItemsBlabla[0].classList.toggle('_active')