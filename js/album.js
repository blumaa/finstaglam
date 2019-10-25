class Album {
  constructor(album) {
    this.albumId = album.id
    this.name = album.name,
    this.description = album.description
  }

  render() {
    return (`<div class="col s12 m6">
        <div class="card blue-grey darken-1 albumCard" id="${this.albumId}">
          <div class="card-content white-text">
            <span class="card-title">${this.name}</span>
            <p>${this.description}</p>
          </div>
        </div>
      </div>`)
  }
}
