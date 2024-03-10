function make_album(artist_name, album_title, tracks) {
    var album_info = {
        "Artist_name": artist_name,
        "Album_title": album_title,
    };
    // Check if tracks is provided and add it to the album_info object
    if (tracks !== undefined) {
        album_info["Number_Of_Tracks"] = tracks;
    }
    console.log(album_info);
}
// Function calls
make_album("Arijit Singh", "Ae Dil Hai Mushkil");
make_album("Arijit Singh", "Tum Hi Ho");
make_album("Atif Aslam", "Talash");
make_album("Arijit Singh", "Khamoshiyan", 5); // Passing a number for tracks
