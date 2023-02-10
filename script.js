// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
// you might have accidentally copied the image instead of the link to the image. if that's the link the image gave you, that's a very strange way to store image data these days, and one way to pull images in would be to download them and upload them to your project. 
//if you paste it again I can show you how I figured that out. 
// so the address of the image should be the same as the link, they're both terms for the URL of the image. URL standing for ... either Uniform Resource Locator, which tells your browser how to look something up. you can get the image url by right clicking and selecting 'copy image address' usually.
//sick so if instead of copying image address, you click 'copy image', then trying to paste that might give you the big ol blob of text you had before. Might, I'm not totally sure. It didn't work when I did it, but otherwise I have no idea how you got the text you did before. 
// ahhhh, that would do it. But yeah, that URL you have is exactly what we're looking to put in the imageURLs list.

//  I tried using a different image this time
//Here's the image adress
//https://upload.wikimedia.org/wikipedia/en/c/ce/Young_and_Beautiful_cover_art.jpg
//
//let imageURLs = [ "https://upload.wikimedia.org/wikipedia/en/c/ce/Young_and_Beautiful_cover_art.jpg", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfqyaHcy8_Z4mitQNT5sKSha5wdBMD0Ff2A&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D-6J26r-MNz4jNSLi6Z-4O4AmxCNBld7QQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSkjM356coHrjKjvDvQuMdzNFwRgpSeuNRA&usqp=CAU", 
"data:image/jpeg;base64,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"
]
//let songNamesList = [
  //"Young and Beautiful", 
  //"Bizcochito", 
  //"Titi Me Pregunto", 
  //"Penny Lane",
  //"Run BTS"
  ]
//let artistsList = [
  //"Lana Del Rey", 
  //"Rosalia", 
  //"Bad Bunny", 
  //"The Beatles",
  //"BTS"
  ]
//let songLinksList = [
  "https://youtu.be/o_1aF54DO60", 
  "https://youtu.be/aG5C32aATKc", 
  "https://youtu.be/Cr8K88UcO0s",
  "https://www.youtube.com/watch?v=z7syIxQCquo"
  "https://youtu.be/a4YwJCZRh5M"
  ]



// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.
let songOne = {
  imageURL: , 
  songName: , 
  artist: , 
  songLink: "",
}

let songTwo = {
  imageURL: , 
  songName: , 
  artist: , 
  songLink: "",
}

let songThree = {
  imageURL: , 
  songName: , 
  artist: , 
  songLink: "Penny Lane",
}
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.




//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

  userImageInput = image.value
  

// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
