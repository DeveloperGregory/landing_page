//Used an array for the different image files to add code in case of more images
const PICS = ["./images/drone.jpg","./images/drones-unmanned-aircraft.jpg","./images/images_medium.png"];
//LEFTARROW and RIGHTARROW for going through the images
const LEFTARROW = document.getElementById("left-arrow");
const RIGHTARROW = document.getElementById("right-arrow");
//The elements 
const PICCONTAINER = document.getElementById("picture-container");
const THUMBCONTAINER = document.getElementById("thumbnail-container");
const PRICE = document.getElementById('price');
//currPic is the incrementer for the number of images on the landing page
let currPic = 0;

//this function will increment currPic or it will make currPic equal to the thumb that was clicked and then add the image to the page
function changePic(change, isAdd){
    if(isAdd){
        currPic += change;
        currPic = (currPic > PICS.length-1) ? 0 : (currPic < 0) ? PICS.length-1 : currPic; 
    }else{
        currPic = change;
    }
    PICCONTAINER.innerHTML = `<img src="${PICS[currPic]}" alt="Drone Pic"> `;
}

//this function takes the number of images, adds them to a list, and displays the list on the page
function createThumbs(){
    for(var i = 0; i < PICS.length; i++){
        THUMBCONTAINER.innerHTML += `<li id='${i}'><a href='#'><img src="${PICS[i]}" alt="Drone Pic Thumbnails"></li>`;
    }
}

//added functionally in case different currency
function displayPrice(currency){
    PRICE.innerHTML = `${currency}59.99`;
}

//calls the changePic function to display the first image
changePic(0, false);
//creates the thumbnails
createThumbs();
const THUMB0 = document.getElementById(0);
const THUMB1 = document.getElementById(1);
const THUMB2 = document.getElementById(2);
displayPrice('$');
//Click event listeners for the elements on the page
LEFTARROW.addEventListener("click", () => changePic(-1, true));
RIGHTARROW.addEventListener("click", () => changePic(1, true));
THUMB0.addEventListener('click', () => changePic(0,false));
THUMB1.addEventListener('click', () => changePic(1,false));
THUMB2.addEventListener('click', () => changePic(2,false));

