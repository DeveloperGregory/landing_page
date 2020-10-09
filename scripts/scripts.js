

const PICS = ["./images/drone.jpg","./images/drones-unmanned-aircraft.jpg","./images/images_medium.png"];
const LEFTARROW = document.getElementById("left-arrow");
const RIGHTARROW = document.getElementById("right-arrow");
const PICCONTAINER = document.getElementById("picture-container");
const THUMBCONTAINER = document.getElementById("thumbnail-container");
const PRICE = document.getElementById('price');
let currPic = 0;


function changePic(change, isAdd){
    if(isAdd){
        currPic += change;
        currPic = (currPic > PICS.length-1) ? 0 : (currPic < 0) ? PICS.length-1 : currPic; 
    }else{
        currPic = change;
    }
    PICCONTAINER.innerHTML = `<img src="${PICS[currPic]}" alt="Drone Pic"> `;
}

function createThumbs(){
    for(var i = 0; i < PICS.length; i++){
        THUMBCONTAINER.innerHTML += `<li id='${i}'><a href=''><img src="${PICS[i]}" alt="Drone Pic Thumbnails"></li>`;
        
    }
}

function displayPrice(currency){
    PRICE.innerHTML = `${currency}59.99`;
}


changePic(0);
createThumbs();
const THUMB0 = document.getElementById(0);
const THUMB1 = document.getElementById(1);
const THUMB2 = document.getElementById(2);
displayPrice('$');
LEFTARROW.addEventListener("click", () => changePic(-1, true));
RIGHTARROW.addEventListener("click", () => changePic(1, true));
THUMB0.addEventListener('click', () => changePic(0,false));
THUMB1.addEventListener('click', () => changePic(1,false));
THUMB2.addEventListener('click', () => changePic(2,false));

