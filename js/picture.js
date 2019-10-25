class Picture{
  constructor(picture) {
    this.pictureId = picture.id
    this.name = picture.name,
    this.description = picture.description,
    this.photographerId = picture.photographer_id
    this.url = picture.image
    this.likes = picture.likes
    this.divElement = document.createElement('div')
    this.divElement.dataset.pictureCardContainerId = picture.id
    // this.divElement.className = "row"
    this.divElement.addEventListener('click', (event) => {
      // console.log(event.target)
      if (event.target.textContent == 'delete') {
        console.log('deleting!')
        Picture.handleDeletePicture(event.target)
      } else if (event.target.textContent == 'edit') {
        console.log('editing!')
        Picture.handleEditPicture(event.target)
      }
    })

  }

  render() {
    // console.log(this.divElement)

    //     <div class="col s12 m6">
    const containerDiv = document.createElement('div')
    containerDiv.className = 'col s12 m4'
    containerDiv.dataset.pictureCardId = `${this.pictureId}`

    //       <div class="card" data-photographer-id="${this.photographerId}" data-picture-id="${this.pictureId}">
    const cardDiv = document.createElement('div')
    cardDiv.className = "card hoverable z-depth-1"
    cardDiv.dataset.photographerId = `${this.photographerId}`
    cardDiv.dataset.pictureId = `${this.pictureId}`

    //         <div class="card-image">
    const cardImageDiv = document.createElement('div')
    cardImageDiv.className = "card-image"

    //           <img src="https://protected-hollows-16401.herokuapp.com/${this.url}">
    const img = document.createElement('img')
    img.src = `https://protected-hollows-16401.herokuapp.com${this.url}`

    //           <span class="card-title">${this.name}</span>
    const imageSpan = document.createElement('span')
    imageSpan.className = "card-title grey-text text-darken-4"
    const textH = document.createElement('h6')
    textH.textContent = `${this.name}`
    imageSpan.append(textH)

    //           <a class="btn-floating waves-effect waves-light blue" id="edit"><i class="material-icons">edit</i></a>
    const editBtnA = document.createElement('a')
    editBtnA.className = 'btn-floating halfway-fab waves-effect waves-light blue left'
    editBtnA.id = 'edit'
    const editBtnI = document.createElement('i')
    editBtnI.className = 'material-icons'
    editBtnI.id = `${this.pictureId}`
    editBtnI.textContent = 'edit'
    editBtnA.append(editBtnI)

    //           <a class="btn-floating halfway-fab waves-effect waves-light red" id="delete"><i class="material-icons">delete</i></a>

    const deleteBtnA = document.createElement('a')
    deleteBtnA.className = 'btn-floating halfway-fab waves-effect waves-light red right'
    deleteBtnA.id = 'delete'
    const deleteBtnI = document.createElement('i')
    deleteBtnI.className = 'material-icons'
    deleteBtnI.id = `${this.pictureId}`
    deleteBtnI.textContent = 'delete'
    deleteBtnA.append(deleteBtnI)

    cardImageDiv.append(img, imageSpan, editBtnA, deleteBtnA)

    //         <div class="card-content">

    const cardContentDiv = document.createElement('div')
    cardContentDiv.className = 'card-content teal lighten-'
    //           <p>${this.description}</p>
    const cardContentP = document.createElement('p')
    cardContentP.className = "truncate blue-text text-darken-4"
    cardContentP.textContent = `${this.description}`

    cardContentDiv.append(cardContentP)


    cardDiv.append(cardImageDiv, cardContentDiv)
    containerDiv.append(cardDiv)
    this.divElement.append(containerDiv)
    // console.log(this.divElement)
    return this.divElement

    // return this.divElement.innerHTML = (`
    //     <div class="col s12 m6">
    //       <div class="card" data-photographer-id="${this.photographerId}" data-picture-id="${this.pictureId}">
    //         <div class="card-image">
    //           <img src="https://protected-hollows-16401.herokuapp.com/${this.url}">
    //           <span class="card-title">${this.name}</span>
    //           <a class="btn-floating waves-effect waves-light blue" id="edit"><i class="material-icons">edit</i></a>
    //           <a class="btn-floating halfway-fab waves-effect waves-light red" id="delete"><i class="material-icons">delete</i></a>
    //         </div>
    //         <div class="card-content">
    //           <p>${this.description}</p>
    //         </div>
    //       </div>
    //     </div>
    //     `)
  }

  // *******************************************************************************************
  // Edit a picture
  // *******************************************************************************************

  static handleEditPicture(target) {
    // picture id
    // console.log(target.id)

    // get the picture div
    const pictureDiv = document.querySelector(`[data-picture-card-id="${target.id}"]`)
    // console.log(pictureDiv)

    // picture conatiner
    const pictureContainer = pictureDiv.parentNode
    // console.log(pictureContainer)

    // picture name
    const pictureName = pictureDiv.children[0].children[0].children[1].textContent
    // console.log(pictureName)

    // picture description
    const pictureDescription = pictureDiv.children[0].children[1].children[0].textContent

    // picture url
    const pictureUrl = pictureDiv.children[0].children[0].children[0].src

    // console.log(pictureDiv.children[0].children[1].children[0].textContent)

    // render form
    const updateForm = document.createElement('form')
    updateForm.className = "col s4 card hoverable z-depth-1"
    updateForm.id = "update-image-form"
    updateForm.dataset.id = `${target.id}`

    // name input

    //       <div class="row">
    //         <div class="input-field col s12">
    //           <input id="name" type="text" value="${pictureName}">
    //         </div>

    const updateFormNameRow = document.createElement('div')
    updateFormNameRow.className = "row"

    const nameDiv = document.createElement('div')
    nameDiv.className = "input-field col s6"

    const nameInput = document.createElement('input')
    nameInput.id = 'name'
    nameInput.type = 'text'
    nameInput.value = `${pictureName}`

    nameDiv.append(nameInput)
    updateFormNameRow.append(nameDiv)
    // console.log(updateFormNameRow)

    // description input

    //       <div class="row">
    //         <div class="input-field col s12">
    //           <input id="description" type="text" value="${pictureDescription}">
    //         </div>
    //       </div>


    const updateFormDescriptionRow = document.createElement('div')
    updateFormDescriptionRow.className = "row"

    const descriptionDiv = document.createElement('div')
    descriptionDiv.className = "input-field col s6"

    const descriptionInput = document.createElement('input')
    descriptionInput.id = 'description'
    descriptionInput.type = 'text'
    descriptionInput.value = `${pictureDescription}`

    descriptionDiv.append(descriptionInput)
    updateFormDescriptionRow.append(descriptionDiv)
    // console.log(updateFormDescriptionRow)

    // file input

    //       <div class="row">
    //         <div class="col s12">
    //           <div class="file-field input-field">
    //              <div class="btn">
    //                <span>File</span>
    //                <input type="file" name="photo">
    //              </div>
    //              <div class="file-path-wrapper">
    //                <input class="file-path" type="text">
    //              </div>
    //            </div>
    //         </div>
    //       </div>


    const updateFormFileRow = document.createElement('div')
    updateFormFileRow.className = "row"

    const updateFormFileCol = document.createElement('div')
    updateFormFileCol.className = "col s12"

    const updateFormFileFieldInput = document.createElement('div')
    updateFormFileFieldInput.className = 'file-field input-field'

    const fileFieldBtnDiv = document.createElement('div')
    fileFieldBtnDiv.className = 'btn'

    const fileFieldBtnSpan = document.createElement('span')
    fileFieldBtnSpan.textContent = 'File'

    const fileFieldBtnInput = document.createElement('input')
    fileFieldBtnInput.type = 'file'
    fileFieldBtnInput.name = 'photo'

    fileFieldBtnDiv.append(fileFieldBtnSpan, fileFieldBtnInput)


    const fileFieldPathDiv = document.createElement('div')
    fileFieldPathDiv.className = 'file-path-wrapper'

    const fileFieldPathInput = document.createElement('input')
    fileFieldPathInput.className = 'file-path'
    fileFieldPathInput.type = 'text'

    fileFieldPathDiv.append(fileFieldPathInput)

    //       <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    //         <i class="material-icons right">send</i>
    //       </button>

    const submitBtn = document.createElement('button')
    submitBtn.className = 'btn waves-effect waves-light'
    submitBtn.type = 'submit'
    submitBtn.name = 'action'
    submitBtn.textContent = 'Submit'

    const submitI = document.createElement('i')
    submitI.className = 'material-icons right'
    submitI.textContent = 'send'

    submitBtn.append(submitI)

    updateFormFileFieldInput.append(fileFieldBtnDiv, fileFieldPathDiv)

    updateFormFileCol.append(updateFormFileFieldInput)

    updateFormFileRow.append(updateFormFileCol)

    updateForm.append(updateFormNameRow, updateFormDescriptionRow, updateFormFileRow, submitBtn)

    // console.log('update form', updateForm)

    // console.log('picture Div', pictureDiv.parentNode)

    pictureDiv.parentNode.replaceChild(updateForm, pictureDiv);

    // add event listener to form

    updateForm.addEventListener('submit', (event) => {
      event.preventDefault()
      // console.log(event.target)
      sendUpdate(event.target)

    })

    // run a patch

    function sendUpdate(form) {
      // console.log(form)

      const pictureId = form.dataset.id
      // console.log(pictureId)
      let input = form[2].files[0]
      // console.log('input', input)
      const name = form[0].value
      // console.log('name', name)
      const description = form[1].value
      // console.log('description', description)
      // const photographerId = user
      // console.log('photographerId', photographerId)

      let data = new FormData()

      data.append('picture', input)
      data.append('id', input)
      data.append('name', name)
      data.append('description', description)
      // data.append('photographer_id', photographerId)

      // console.log('data', data)

      fetch(`https://protected-hollows-16401.herokuapp.com/pictures/${pictureId}`, {
        method: 'PATCH',
        body: data
      })
        .then(resp => resp.json())
        .then(picData => {
          // console.log(picData)
          // updatePicCard(picData)
          // console.log('form parent node', form.parentNode)
          const updatedPic = new Picture(picData)
          const updatedPicHtml = updatedPic.render()
          form.parentNode.replaceChild(updatedPicHtml, form);

        })
    }
  }
  //
  // renderUpdateForm() {
  //   return (`
  //     <div class="row">
  //       <form class="col s12" id="upload-image-form">
  //         <div class="row">
  //           <div class="input-field col s12">
  //             <input id="name" type="text" value="${this.name}">
  //           </div>
  //         </div>
  //         <div class="row">
  //           <div class="input-field col s12">
  //             <input id="description" type="text" value="${this.description}">
  //           </div>
  //         </div>
  //         <div class="row">
  //           <div class="col s12">
  //             <div class="file-field input-field">
  //                <div class="btn">
  //                  <span>File</span>
  //                  <input type="file" name="photo">
  //                </div>
  //                <div class="file-path-wrapper">
  //                  <input class="file-path" type="text">
  //                </div>
  //              </div>
  //           </div>
  //         </div>
  //         <button class="btn waves-effect waves-light" type="submit" name="action">Submit
  //           <i class="material-icons right">send</i>
  //         </button>
  //       </form>
  //     </div>
  //     `)
  // }



// *********************************************************************************************
// Delete a picture
// *********************************************************************************************
  static handleDeletePicture(target) {
    // console.log(target.parentNode.parentNode.parentNode.parentNode.parentNode)
    const reqObj = {
      method: 'DELETE'
    }
    const pictureId = target.id
    // console.log(pictureId)
    fetch(`https://protected-hollows-16401.herokuapp.com/pictures/${pictureId}`, reqObj)
      .then(resp => resp.json() )
      .then(data => {
        // console.log('deleted', data)
        // console.log(target)
        target.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
      })
  }

  // *************************************************************************
  // Display Pictures to add to album
  // *************************************************************************

  renderPictureToAdd() {
    return (`
        <div class="col s12 m6">
          <div class="card" id="${this.pictureId}">
            <div class="card-image">
              <img src="https://protected-hollows-16401.herokuapp.com/${this.url}">
              <span class="card-title">${this.name}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light green add-pic" ><i class="material-icons">add</i></a>
              <span class=" btn blue left">${this.likes.length} Like</span>
            </div>
          </div>
        </div>
      `)
  }

  renderPictureToAlbum() {
      return (`
        <div class="col s12 m6">
          <div class="card" id="${this.pictureId}">
            <div class="card-image">
              <img src="https://protected-hollows-16401.herokuapp.com/${this.url}">
              <span class="card-title">${this.name}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red del-pic"><i class="material-icons">delete</i></a>
              <span class="btn blue left">${this.likes.length} Like</span>
            </div>
          </div>
        </div>
      `)
  }



  renderPictureToIndex() {
    return (`
      <div class="col s12 m6">
        <div class="card" id="${this.pictureId}">
          <div class="card-image">
            <img src="https://protected-hollows-16401.herokuapp.com/${this.url}">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-action">
            <p><a class="waves-effect waves-light btn-small like-button">${this.likes.length} Like</a></p>
          </div>
        </div>
      </div>
    `)
  }
  // return this.divElement.innerHTML = (`
  //     <div class="col s12 m6">
  //       <div class="card" data-photographer-id="${this.photographerId}" data-picture-id="${this.pictureId}">
  //         <div class="card-image">
  //           <img src="https://protected-hollows-16401.herokuapp.com/${this.url}">
  //           <span class="card-title">${this.name}</span>
  //           <a class="btn-floating waves-effect waves-light blue" id="edit"><i class="material-icons">edit</i></a>
  //           <a class="btn-floating halfway-fab waves-effect waves-light red" id="delete"><i class="material-icons">delete</i></a>
  //         </div>
  //         <div class="card-content">
  //           <p>${this.description}</p>
  //         </div>
  //       </div>
  //     </div>
  //     `)


}
