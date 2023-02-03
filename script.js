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
let imageURLs = [ "https://upload.wikimedia.org/wikipedia/en/c/ce/Young_and_Beautiful_cover_art.jpg", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfqyaHcy8_Z4mitQNT5sKSha5wdBMD0Ff2A&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D-6J26r-MNz4jNSLi6Z-4O4AmxCNBld7QQ&usqp=CAU",
"", 
""
]
let songNamesList = [
  "Young and Beautiful", 
  "Bizcochito", 
  "Titi Me Pregunto", 
  "Penny Lane",
  "In my Life"
  ]
let artistsList = [
  "Lana Del Rey", 
  "Rosalia", 
  "Bad Bunny", 
  "The Beatles",
  "The Beatles"
  ]
let songLinksList = [
  "https://youtu.be/o_1aF54DO60", 
  "https://youtu.be/aG5C32aATKc", 
  "https://youtu.be/Cr8K88UcO0s",
  "https://www.youtube.com/watch?v=z7syIxQCquo"
  ]

// you might find it easier to keep track of your list entries if you split them across multiple lines, ala:
//  let myList = [
//  'some',   // first entry
//  'entries' // second entry
//  ]
// another thing that could be helpful, is using comments to take notes. for example, you can put comments on the same line as code
// which could be helpful for tracking which youtube link is which. 
// Note, you don't have to do these things, I'm just suggesting them because they're useful tools when you're programming. Comments are less for other people and more for you in the future, like, a couple weeks from now looking back and going 'what was i even thinking when I wrote this?'
// you may want to  put the bracket on the same line as your let, as javascript can get... weird. 
// another option if you don't want to fiddle with spaces around your code, is up in the top right of this text window, theres a little box with text lines in it next to the vertical ... , which says 'format your code. '

//Got it

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.
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
