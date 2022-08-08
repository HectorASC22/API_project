let requestURL = "https://api.imgflip.com/get_memes";

function displayMeme(data) {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        let memeObject = data.data.memes[randInt(data.data.memes.length)];

    let imgContainer = document.querySelector("img");
    imgContainer.src = memeObject.url;

    let caption = document.querySelector("p");
    caption.innerHTML = memeObject.name; 
    })

    .catch(function (error) {
        console.log("Error during fetch:", error);
    });

}

function randInt(upperLimit) {
    return Math.floor(Math.random()*upperLimit);
}





let button = document.querySelector("button");
button.onclick = displayMeme;




