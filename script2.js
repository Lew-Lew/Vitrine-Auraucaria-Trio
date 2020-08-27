let columns = document.getElementById("columnsAlbum2");
let tableauConcerts = document.getElementById("tableConcerts");

class Concert {
  constructor(place, date) {
    this.place = place;
    this.date = date;
  }
}

class Album {
  constructor(title, image) {
    this.title = title;
    this.image = image;
    this.linkSpotify = "https://open.spotify.com/search/";
    this.linkApple = "https://www.apple.com/fr/music/";
    this.linkDeezer = "https://www.deezer.com/fr/";
  }
}

let tableConcerts = [
  new Concert("AccorHotels Arena Paris 12", "15 Septembre 2020"),
  new Concert("Alhambra Paris 10", "16 Septembre 2020"),
  new Concert("Badaboum Paris 11", "17 Septembre 2020"),
  new Concert("Bellevilloise Paris 20", "20 Septembre 2020"),
  new Concert("EuropéenParis 17", "25 Septembre 2020"),
  new Concert("Olympia Paris 9", "26 Septembre 2020"),
];

let tableAlbums = [
  new Album("Album n°1", "static/lin.jpg"),
  new Album("Album n°2", "static/capture.png"),
  new Album("Album n°3", "static/linen2.jpg"),
];

function AffichageAlbums() {
  for (let columnAlbum of tableAlbums) {
    let newColumn = document.createElement("div");
    newColumn.classList.add("column", "is-4");
    columns.appendChild(newColumn);

    newColumn.innerHTML =
      `
    <h2 class="subtitle" id="titleAlbum">` +
      columnAlbum.title +
      `</h2>
          <div class="container" id="divImgAlbum"> <img src=` +
      columnAlbum.image +
      ` alt="" id="imgAlbum">
        </div>
        <div class="container" id="divLinksAlbum">
        <a id="linkSpotify" href= ` +
      columnAlbum.linkSpotify +
      ` target=_blank>Spotify</a> /
        <a id="linkApple" href=` +
      columnAlbum.linkApple +
      ` target=_blank>Apple Music</a> /
        <a id="linkDeezer" href=` +
      columnAlbum.linkDeezer +
      ` target=_blank>Deezer</a>
      </div>
    `;
  }
}
AffichageAlbums();

function AffichageConcerts() {
  for (let newConcert of tableConcerts) {
    let newLign = document.createElement("tr");
    tableauConcerts.appendChild(newLign);

    let columnPLace = document.createElement("td");
    columnPLace.classList.add("lieuxConcerts");
    columnPLace.innerHTML = newConcert.place;
    newLign.appendChild(columnPLace);

    let columnDate = document.createElement("td");
    columnDate.classList.add("datesConcerts");
    columnDate.innerHTML = newConcert.date;
    newLign.appendChild(columnDate);
  }
}
AffichageConcerts();
