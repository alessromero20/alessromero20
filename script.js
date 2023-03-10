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

// let imageURLsList = [ "https://upload.wikimedia.org/wikipedia/en/c/ce/Young_and_Beautiful_cover_art.jpg", 
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfqyaHcy8_Z4mitQNT5sKSha5wdBMD0Ff2A&usqp=CAU",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D-6J26r-MNz4jNSLi6Z-4O4AmxCNBld7QQ&usqp=CAU",
// "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSkjM356coHrjKjvDvQuMdzNFwRgpSeuNRA&usqp=CAU"]
// let songNamesList = [
//   "Young and Beautiful", 
//   "Bizcochito", 
//   "Titi Me Pregunto", 
//   "Penny Lane",
//   "Run BTS"]
// let artistsList = [
//   "Lana Del Rey", 
//   "Rosalia", 
//   "Bad Bunny", 
//   "The Beatles",
//   "BTS"]
// //let songLinksList = [
//   "https://youtu.be/o_1aF54DO60", 
//   "https://youtu.be/aG5C32aATKc", 
//   "https://youtu.be/Cr8K88UcO0s",
//   "https://www.youtube.com/watch?v=z7syIxQCquo",
//   "https://youtu.be/a4YwJCZRh5M"
//   ""
// ]
//https://variancemagazine.com/images/lana-del-rey-young-beautiful.png
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfqyaHcy8_Z4mitQNT5sKSha5wdBMD0Ff2A&usqp=CAU
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D-6J26r-MNz4jNSLi6Z-4O4AmxCNBld7QQ&usqp=CAU


// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.
let songOne = {
  imageURL: "https://variancemagazine.com/images/lana-del-rey-young-beautiful.png",
  songName: "Young and Beautiful",
  artist: "Lana Del Rey",
  songLink: "https://youtu.be/o_1aF54DO60",
}

let songTwo = {
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfqyaHcy8_Z4mitQNT5sKSha5wdBMD0Ff2A&usqp=CAU",
  songName: "Bizcochito",
  artist: "Rosalia",
  songLink: "https://youtu.be/aG5C32aATKc",
}

let songThree = {
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-D-6J26r-MNz4jNSLi6Z-4O4AmxCNBld7QQ&usqp=CAU",
  songName: "Titi Me Pregunto",
  artist: "Bad Bunny",
  songLink: "https://youtu.be/Cr8K88UcO0s",
}

let songFour = {
  imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSkjM356coHrjKjvDvQuMdzNFwRgpSeuNRA&usqp=CAU",
  songName: "Penny Lane",
  artist: "The Beatles",
  songLink: "https://www.youtube.com/watch?v=z7syIxQCquo",
}

let songFive = {
  imageURL: "https://images.hindustantimes.com/img/2022/06/09/1600x900/bts-proof-album_1653669893020_1654759516087.jfif",
  songName: "Run BTS",
  artist: "BTS",
  songLink: "https://youtu.be/a4YwJCZRh5M",
}


// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let allSongs = [songOne, songTwo, songThree, songFour, songFive]



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.

// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.



/*let songFive = {
  imageURL: "https://images.hindustantimes.com/img/2022/06/09/1600x900/bts-proof-album_1653669893020_1654759516087.jfif",
  songName: "Run BTS",
  artist: "BTS",
  songLink: "https://youtu.be/a4YwJCZRh5M",
}*/

function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

  userImageInput = image.value
  userSongNameInput = songName.value
  userArtistInput = artist.value
  userSongLinkInput = songLink.value

  let newSong = {
    imageURL: userImageInput,
    songName: userSongNameInput,
    artist: userArtistInput,
    songLink:userSongLinkInput,
  }

  allSongs.push(newSong)
}
// task 10: use `.push()` to add each input value to the correct array.





/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  //   imageURLsList.forEach(function(image) {
  // 	displayImage.insertAdjacentHTML('beforeend', `<img src= ${image}>`)
  //  })

  // songNamesList.forEach(function(songName) {
  // 	displaySong.insertAdjacentHTML('beforeend', `<p>${songName}</p>`)
  //  })

  // artistsList.forEach(function(artist) {
  // 	displayArtist.insertAdjacentHTML('beforeend', `<p>${artist}</p>`)
  //  })

  // songLinksList.forEach(function(songLink) {
  // 	displayLink.insertAdjacentHTML('beforeend', `<p>${songLink}</p>`)
  //  })

  allSongs.forEach(function(song) {
    displayImage.insertAdjacentHTML('beforeend', `<img src= ${song.imageURL}>`)
    displaySong.insertAdjacentHTML('beforeend', `<p>${song.songName}</p>`)
    displayArtist.insertAdjacentHTML('beforeend', `<p>${song.artist}</p>`)
    displayLink.insertAdjacentHTML('beforeend', `<a href=${song.songLink} target="_blank">${song.songName}</a>`)
  })

}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
document.addEventListener("DOMContentLoaded", displaySongInfo);