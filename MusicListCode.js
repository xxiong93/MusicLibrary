"use strict"

$(document).ready(getMusic)

function getMusic() {

    $.ajax({
        type: "get",
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        success: function (songList) {

            callAllFunctions(songList);
            //call the function, append item, then run through loop again
        }
            //create a new row for each artist,title,album,genre, and release date added
    });
};

function showMusic(songs) {
    let songPick;
    for (let i = 0; i < songs.length; i++) {
        songPick = songs[i].title;
       // document.write(songPick);
    }
    
    // $("#test").html("<div>songs[i].title</div>")
}

function showAlbum(albums) {
    let albumPick;
    for (let i = 0; i < albums.length; i++) {
        albumPick = albums[i].album;
    }
    // return(albumPick);
}

function showArtist(artists) {
    let artistPick;
    for (let i = 0; i < artists.length; i++) {
        artistPick = artists[i].artist;
        
    }
    // return(artistPick);
}

function showGenre(genreList) {
    let genrePick;
    for (let i = 0; i < genreList.length; i++) {
        genrePick = genreList[i].genre;
       
    }
    // return(genrePick);
}

function showDate(date) {
    let datePick;
    for (let i = 0; i < date.length; i++) {
        datePick = date[i].releaseDate;
    }
    // return(datePick);
}

function callAllFunctions(songList){
    showMusic(songList);
    showAlbum(songList);
    showArtist(songList);
    showGenre(songList);
    showDate(songList);

}
//loop, jQuery.append, .replace, "<<< use these tools"
//when building table, include a table head with table headers and rows, and then a table body(where id goes)