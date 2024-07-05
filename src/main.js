import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderImage } from "./js/render-functions";


const btn = document.querySelector(".search-btn");
const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");
const list = document.querySelector(".gallery");
const loader = document.querySelector(".loader")

form.addEventListener("submit", (event) =>{
event.preventDefault();
const value = event.target.elements.query.value.trim();
loader.classList.toggle(".visually-hidden");


if ( value === ""){
    btn.disable = true;
    iziToast.error({
        position: "topRight",
        message: " Plese enter some text",
    })
}

list.innerHTML = "";

fetchImages(value)
.then(data => {
    if( data.hits && data.hits.length > 0){
        const markup = renderImage(data.hits);
        list.insertAdjacentHTML("beforeend", markup);
        loader.classList.toggle("visual-hidden");


        let lightbox = new SimpleLightbox (".gallery a", {
            captions: true,
            captionDelay: 250,
            captionPosition: 'bottom',
            captionsData: 'alt',
        });

lightbox.refresh();
    } else{
        iziToast.error({
            position: "topRight",
            message: 'Sorry, there are no images matching your search query. Please try again!',
        })
        loader.classList.toggle("visually-hidden");
    }
})
.catch(err =>{
    console.log(err);
    iziToast.error({
        position: "topRight",
        message: "Sorry, the request cant be completed at this time. Please try again"
    })
});
input.value = "";
});