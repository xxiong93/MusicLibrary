"use strict"

$(document).ready(getMusic)

function getMusic() {


    var songName;

    $.ajax({
        type: "get",
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        success: function(songList) {
        //    $.find(songList.title);
            
            showMusic(songList);
            showAlbum(songList);
        }

    });
};

function showMusic(songs) {
    console.log(songs);
    console.log(songs[8].title);
    for(let i = 0; i < songs.length; i++){
        document.write(songs[i].title);
    }
    $("#test").html("<div>i</div>")
}

function showAlbum(albums) {

    for(let i = 0; i < albums.length; i++){
        document.write(albums[i].album);
        
    }
}

function showArtistI(artists){

    for(let i = 0; i < artist.length; i++){
        document.write(artists[i].artist);
    }
}

function showGenre(genreList){

    for(let i = 0; i < genreList.length; i++){
        document.write(genreList[i].genre);
    }
}

function showDate(date){

    for(let i = 0; i < date.length; i++){
        document.write(date[i].releaseDate);
    }
}
//loop, jQuery.append, .replace, "<<< use these tools"
//when building table, include a table head with table headers and rows, and then a table body(where id goes)