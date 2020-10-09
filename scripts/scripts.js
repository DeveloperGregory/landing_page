const PICS = ["./images/drone.jpg","./images/drones-unmanned-aircraft.jpg","./images/images_medium.png"];
const LEFTARROW = document.getElementById("left-arrow");
const RIGHTARROW = document.getElementById("right-arrow");
const PICCONTAINER = document.getElementById("picture-container");
const THUMBCONTAINER = document.getElementById("thumbnail-container");
const PRICE = document.getElementById('price');
let currPic = 0;


function changePic(change){
    currPic += change;
    currPic = (currPic > PICS.length-1) ? 0 : (currPic < 0) ? PICS.length-1 : currPic; 
    PICCONTAINER.innerHTML = `<img src="${PICS[currPic]}" alt="Drone Pic"> `;
}

function createThumbs(){
    for(var i = 0; i < PICS.length; i++){
        THUMBCONTAINER.innerHTML += `<li><a href=''><img src="${PICS[i]}" alt="Drone Pic Thumbnails"></li>`;
    }
    
}
function displayPrice(currency){
    PRICE.innerHTML = `${currency}59.99`;
}


changePic(0);
createThumbs();
displayPrice('$');
LEFTARROW.addEventListener("click", () => changePic(-1));
RIGHTARROW.addEventListener("click", () => changePic(1));

