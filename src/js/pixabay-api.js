 export function fetchImages(value){
    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    const params = new URLSearchParams({
        key: "44767579-3ee2796193c18f7fdbcfe2f8d",
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });


    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url)
    .then(res => res.json());
 }