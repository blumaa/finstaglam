class ProfileCard {
  constructor(photographer) {
    this.id = photographer.id,
    this.name = photographer.name,
    this.birthDate = photographer.birthdate,
    this.bio = photographer.bio,
    this.startDate = photographer.start_date,
    this.city = photographer.city,
    this.url = photographer.image
  }

  render() {
    return (`
      <div class="card cyan lighten-5 hoverable">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="https://protected-hollows-16401.herokuapp.com/${this.url}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${this.name}<i class="material-icons right">edit</i></span>
          <p>Birth Date: ${this.birthDate}</p>
          <p>Bio: ${this.bio}</p>
          <p>Start Date: ${this.startDate}</p>
          <p>Location: ${this.city}</p>
        </div>
        <div class="card-reveal lime lighten-3">
          <span class="card-title grey-text text-darken-4">Edit ${this.name}'s Profile<i class="material-icons right">close</i></span>

          <div class="row">
            <form class="col s12" id="edit-profile-form" data-id="${this.id}">
                <div class="input-field col s12">
                  <input id="name" type="text" value="${this.name}">
                  <label for="name">Name</label>
                </div>
                <div class="input-field col s12">
                  <input id="birthDate" type="text" value="${this.birthDate}">
                  <label for="birthDate">Birth Date</label>
                </div>
                <div class="input-field col s12">
                  <input id="bio" type="text" value="${this.bio}">
                  <label for="bio">Bio</label>
                </div>
                <div class="input-field col s12">
                  <input id="startDate" type="text" value="${this.startDate}">
                  <label for="startDate">Start Date</label>
                </div>
                <div class="input-field col s12">
                  <input id="city" type="text" value="${this.city}">
                  <label for="city">City</label>
                </div>

                <div class="row">
                  <div class="col s12">
                    <div class="file-field input-field">
                       <div class="btn">
                         <span>File</span>
                         <input type="file">
                       </div>
                       <div class="file-path-wrapper">
                         <input class="file-path" type="text">
                       </div>
                     </div>
                  </div>
                </div>


                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i class="material-icons right">send</i>
                </button>
            </form>
          </div>


        </div>
      </div>
      `)
  }

  renderToIndex() {
    return (`
      <div class="col s12 m12 click-photographer" id=${this.id}>
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s5">
              <img src="https://protected-hollows-16401.herokuapp.com/${this.url}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class="col s6">
                <p class="flow-text">Name: ${this.name}</p>
                <p class="black-text">Bio: ${this.bio}</p>
                <p class="black-text">City: ${this.city}</p>
            </div>
            <div class="col s2">
                <p><a class="waves-effect waves-light btn-small">Follow</a></p>
            </div>
          </div>
        </div>
      </div>
    `)
  }
}
