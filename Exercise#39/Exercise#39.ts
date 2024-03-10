function make_album(artist_name: string, album_title: string, tracks?: string) {
    const album_info: {[key:string]: string | number} = {
        "Artist_name": artist_name,
        "Album_title": album_title,
    };

    
    if (tracks !== undefined) {
        album_info["Number_Of_Tracks"] = tracks;
    }

    console.log(album_info);
}


make_album("Arijit Singh", "Ae Dil Hai Mushkil");
make_album("Arijit Singh", "Tum Hi Ho");
make_album("Atif Aslam", "Talash");
make_album("Arijit Singh", "Khamoshiyan", '5'); 
