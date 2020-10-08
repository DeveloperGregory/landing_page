const vids = ["images/drone.jpg","images/drones-unmanned-aircraft.jpg","images/images_medium.png"];
const htmlCode1 = '<img src="';
const htmlCode2 = ' alt=';
const htmlCode3 = '"Product Image"';
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const picContainer = document.getElementById("picture-container");
let currPic = 0;


function changePic(){
    alert(currPic);

    picContainer.innerHTML = '<img src="' + vids[currPic] + '" alt="Product Page"';
    currPic = (currPic == vids.length-1) ? 0: currPic++;

    
}

changePic();
leftArrow.addEventListener("click", changePic);

