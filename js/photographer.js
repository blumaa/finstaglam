class Photographer {
  constructor(photographer) {
    this.id = photographer.id,
    this.name = photographer.name,
    this.birthDate = photographer.birthdate,
    this.bio = photographer.bio,
    this.startDate = photographer.start_date,
    this.city = photographer.city
  }

  render() {
      return (`
            <div class='row grey-text text-darken-3' id="${this.id}">
              <div class="section">
                <div>Name: ${this.name}</div>
              </div>
              <div class="divider"></div>
              <div class="section">
                <div>Birth Date: ${this.birthDate}</div>
                <div>Bio: ${this.bio}</div>
                <div>Start Date: ${this.startDate}</div>
                <div>Location: ${this.city}</div>
              </div>
              <a class="btn-floating btn-small waves-effect cyan"><i class="material-icons">edit</i></a>
            </div>
        `)
  }


}
