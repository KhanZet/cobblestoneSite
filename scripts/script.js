const listButton = document.querySelectorAll('.header__item');
const listLinks = document.querySelectorAll('.header__item a');
for(let i = 0;i < listButton.length;i++){
	listButton[i].addEventListener("click",() =>{
		listButton[i].classList.toggle("_active")
	} )
}

// const arrayOfGallery = ["CobbleStone", "Block", "Wall-Tiles", "Blabla"]
// for(let i = 0; i < arrayOfGallery.length-1; i++){

// }
// -------------------------------------------------------------------------
const galleryItemsCobbleStone = document.querySelectorAll('.cobblestone__gallery .gallery__item');
const buttonsCobbleStone = document.querySelectorAll('.cobblestone__button');
function galleryCobbleStone (count, pol) {
	for(let i = 0; i < galleryItemsCobbleStone.length; i++){
	if (i == count){
		galleryItemsCobbleStone[i].classList.add("_active");
		if(pol){
			galleryItemsCobbleStone[i-1].classList.remove("_active")
		}else if(!pol){
			galleryItemsCobbleStone[i+1].classList.remove("_active")
		}
	} 
}
}
let countOfCobbleStoneItems = 0;
buttonsCobbleStone[1].addEventListener('click', function (e) {
	countOfCobbleStoneItems++;
	if(countOfCobbleStoneItems>(galleryItemsCobbleStone.length-1)) countOfCobbleStoneItems=(galleryItemsCobbleStone.length-1);
	galleryCobbleStone(countOfCobbleStoneItems, 1);
});
buttonsCobbleStone[0].addEventListener('click', function (e) {
	countOfCobbleStoneItems--;
	if(countOfCobbleStoneItems<0) countOfCobbleStoneItems=0;
	galleryCobbleStone(countOfCobbleStoneItems, 0);

});
galleryItemsCobbleStone[0].classList.toggle('_active')
// --------------------------------------------------------------------------
const galleryItemsBlocks = document.querySelectorAll('.blocks__gallery .gallery__item');
const buttonsBlocks = document.querySelectorAll('.blocks__button');
function galleryBlocks (count, pol) {
	for(let i = 0; i < galleryItemsBlocks.length; i++){
	if (i == count){
		galleryItemsBlocks[i].classList.add("_active");
		if(pol){
			galleryItemsBlocks[i-1].classList.remove("_active")
		}else if(!pol){
			galleryItemsBlocks[i+1].classList.remove("_active")
		}
	} 
}
}
let countOfBlocksItems = 0;
buttonsBlocks[1].addEventListener('click', function (e) {
	countOfBlocksItems++;
	if(countOfBlocksItems>(galleryItemsBlocks.length-1)) countOfBlocksItems=(galleryItemsBlocks.length-1);
	galleryBlocks(countOfBlocksItems, 1);
});
buttonsBlocks[0].addEventListener('click', function (e) {
	countOfBlocksItems--;
	if(countOfBlocksItems<0) countOfBlocksItems=0;
	galleryBlocks(countOfBlocksItems, 0);

});
galleryItemsBlocks[0].classList.toggle('_active')

// -------------------------------------------------------
const galleryItemsWallTiles = document.querySelectorAll('.wall-tiles__gallery .gallery__item');
const buttonsWallTiles = document.querySelectorAll('.wall-tiles__button');
function galleryWallTiles (count, pol) {
	console.log("gallery count" + count)
	for(let i = 0; i < galleryItemsWallTiles.length; i++){
	if (i == count){
		galleryItemsWallTiles[i].classList.add("_active");
		if(pol){
			galleryItemsWallTiles[i-1].classList.remove("_active")
		}else if(!pol){
			galleryItemsWallTiles[i+1].classList.remove("_active")
		}
	} 
}
}
let countOfWallTilesItems = 0;
buttonsWallTiles[1].addEventListener('click', function (e) {
	countOfWallTilesItems++;
	if(countOfWallTilesItems>(galleryItemsWallTiles.length-1)) countOfWallTilesItems=(galleryItemsWallTiles.length-1);
	galleryWallTiles(countOfWallTilesItems, 1);
});
buttonsWallTiles[0].addEventListener('click', function (e) {
	countOfWallTilesItems--;
	if(countOfWallTilesItems<0) countOfWallTilesItems=0;
	galleryWallTiles(countOfWallTilesItems, 0);

});
galleryItemsWallTiles[0].classList.toggle('_active')
// -----------------------------------------------
const galleryItemsBlabla = document.querySelectorAll('.blabla__gallery .gallery__item');
const buttonsBlabla = document.querySelectorAll('.blabla__button');
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

// ----------------------------------------------------------
const burgerButton = document.querySelector('.burger');
const headerContainer = document.querySelector('.header__container');

burgerButton.addEventListener("click", () => {
	headerContainer.classList.toggle("_active");
	burgerButton.classList.toggle("_active");
})
// ==================================================================

const footerScroll = document.querySelector("#footer");
const aboutScroll = document.querySelector("#about");
const cobblestoneScroll = document.querySelector("#cobblestone");
const blocksScroll = document.querySelector("#blocks");

const footerScrollButton = document.querySelector("#footerlink");
const aboutScrollButton = document.querySelector("#aboutlink");
const cobblestoneScrollButton = document.querySelector("#cobblestonelink");
const blocksScrollButton = document.querySelector("#blockslink");

footerScrollButton.addEventListener('click', () => {
	footerScroll.scrollIntoView("false")
	headerContainer.classList.remove("_active");
	burgerButton.classList.remove("_active");
})
aboutScrollButton.addEventListener('click', () => {
	aboutScroll.scrollIntoView()
	headerContainer.classList.remove("_active");
	burgerButton.classList.remove("_active");

})
cobblestoneScrollButton.addEventListener('click', () => {
	cobblestoneScroll.scrollIntoView()
	headerContainer.classList.remove("_active");
	burgerButton.classList.remove("_active");
})
blocksScrollButton.addEventListener('click', () => {
	blocksScroll.scrollIntoView()
	headerContainer.classList.remove("_active");
	burgerButton.classList.remove("_active");
})