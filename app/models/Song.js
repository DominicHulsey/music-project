export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    getArtist() {
        return `<div class="row bg-dark">
        <div class="col-12 d-flex justify-content-center align-items-center">
        <h1 class="text-center text-white p-2"><u>${this.artist} music:</u></h1>
        </div>
        </div>`
    }

    getTemplate() {
        return `
        <audio id="${this.title}">
        <source src="${this.preview}"></audio>
         <div class="card col-6 col-sm-4 col-md-3 col-lg-2 bg-dark border border-white rounded" onclick="document.getElementById('${this.title}').play()">
  <img class="card-img-top" src="${this.albumArt}">
  <div class="card-body">  
    <p class="card-text text-white">${this.title}</p>
    <p class="card-text text-white">price: $${this.price}</p>
    <p class="card-text text-white">CLICK FOR PREVIEW</p>         
  </div >
</div >`
    }
}

/*  <audio controls class="w-100">
        <source src="${this.preview}"></audio>
         </audio></a> */