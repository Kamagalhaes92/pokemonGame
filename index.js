const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//Creates canvas width and height
canvas.width = 1024;
canvas.height = 576;
c.fillRect(0, 0, canvas.width, canvas.height);

//Adds background to the image
const image = new Image();
image.src = "./game-assets/images/pokemonMAp.png";

//Get player image
const playerImage = new Image();
playerImage.src = "./game-assets/images/playerDown.png";

//Calls drawimage when image is loaded

//Add animation infinite loop
function animate() {
  window.requestAnimationFrame(animate);

  c.drawImage(image, -475, -970);
  c.drawImage(
    playerImage,
    //Add Crop to an image. it takes 4 arguments x position, y , crop, width and height
    //From;
    0,
    0,
    //To:
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,

    //Actual width and height image should render at
    playerImage.width / 4,
    playerImage.height
  );
}

//Adds event listener for key down
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    //when w is pressed call code
    case "w":
      console.log("pressed w key");
      break;
    case "a":
      console.log("pressed a key");
      break;
    case "s":
      console.log("pressed s key");
      break;
    case "d":
      console.log("pressed d key");
      break;
  }
});
