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
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: 'alt',
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = event.target.elements.query.value.trim();

    if (value === "") {
        iziToast.error({
            position: "topRight",
            message: "Please enter some text",
        });
        return;
    }

    list.innerHTML = "";
    loader.classList.remove("visually-hidden");

    fetchImages(value)
        .then(data => {
            if (data.hits && data.hits.length > 0) {
                const markup = renderImage(data.hits);
                list.insertAdjacentHTML("beforeend", markup);
                loader.classList.add("visually-hidden");

                lightbox.refresh();
            } else {
                iziToast.error({
                    position: "topRight",
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                loader.classList.add("visually-hidden");
            }
        })
        .catch(err => {
            console.log(err);
            iziToast.error({
                position: "topRight",
                message: "Sorry, the request can't be completed at this time. Please try again",
            });
            loader.classList.add("visually-hidden");
        });

    input.value = "";
});