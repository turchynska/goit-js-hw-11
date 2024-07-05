import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderImage } from "./js/render-functions";


const btn = document.querySelector(".search-btn");
const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");
const gallery = document.querySelector(".gallery");
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
    }
})
}
)