function main() {
  let photogId
  if(localStorage.getItem("user")) {
    photogId = parseInt(localStorage.getItem("user"))
  } else {
    let userinput = prompt('Enter your id')
    photogId = parseInt(userinput)
    localStorage.setItem("user", userinput);
  }


  document.addEventListener('DOMContentLoaded', () => {
    getAllPhotographers()
    myProfileButton()
    logOutButton()
  })


  const getAllPhotographers = () => {
    fetch('https://protected-hollows-16401.herokuapp.com/photographers')
      .then(resp => resp.json())
      .then(data => renderPhotographers(data))
      .catch(errors => console.log(errors))
  }

  const renderPhotographers = (photographers) => {
    const containerPhotographers = document.querySelector('.photographers-container')
    const renderedPhotographersHtml = photographers.map(photographer => renderPhotographer(photographer)).join('')
    console.log(containerPhotographers)
    containerPhotographers.insertAdjacentHTML('beforeend', renderedPhotographersHtml)

    document.querySelectorAll('.click-photographer').forEach(card => {
      card.onclick = (event) => {
        renderPhotogPicture(card.id)
      }
    })
  }

  const renderPhotographer = (photographer) => {
    const newPhotographer = new ProfileCard(photographer)
    const newPhotographerCardHtml = newPhotographer.renderToIndex()
    return newPhotographerCardHtml
  }

  const renderPhotogPicture = (id) => {
    fetch('https://protected-hollows-16401.herokuapp.com/pictures')
      .then(resp => resp.json())
      .then(data => filterPhotogPicture(data, id))
  }

  const filterPhotogPicture = (data, id) => {
    const container = document.querySelector('.photographers-container')
    container.innerHTML = ''
    const buttonRow = document.createElement('div')
    buttonRow.className = 'row center-align'
    const backBut = document.createElement('a')
    backBut.className = 'waves-effect waves-light btn'
    backBut.innerText = 'Back'

    backBut.onclick = (event) => {
      container.innerHTML = ''
      getAllPhotographers()
    }

    buttonRow.append(backBut)
    container.append(buttonRow)

    const filteredPhotogPics = data.filter(pic => pic.photographer_id == id)
    const renderedPicturesHtml = filteredPhotogPics.map(picture => renderFilteredPic(picture)).join('')
    container.insertAdjacentHTML('beforeend', renderedPicturesHtml)
    document.querySelectorAll('.like-button').forEach(button => {
      button.onclick = (event) => {
        likePicture(event)
      }
    })
  }

  const renderFilteredPic = (pic) => {
    console.log(pic)
    const pictureHtml = new Picture(pic)
    console.log(pictureHtml)
    const htmlPicture = pictureHtml.renderPictureToIndex()
    return htmlPicture
  }

  const likePicture = (event) => {
    const pictureId = event.target.parentNode.parentNode.parentNode.id
    console.log(event.target)
    const myData = {
      photographer_id: photogId,
      picture_id: pictureId
    }


    const reqObj = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        photographer_id: photogId,
        picture_id: pictureId
      })
    }

    fetch('https://protected-hollows-16401.herokuapp.com/likes')
      .then(resp => resp.json())
      .then(data => checkIfExist(data))

    const checkData = (elem) => {
      return (elem.photographer_id == photogId && elem.picture_id == pictureId)
    }

    const checkIfExist = (data) => {
      if (!data.some(checkData)) {
        fetch(`https://protected-hollows-16401.herokuapp.com/likes`, reqObj)
          .catch(error => console.log(error))
        event.target.innerHTML = `${parseInt(event.target.innerHTML) + 1} Like`
      } else {
        const likeId = data.find(checkData).id
        fetch(`https://protected-hollows-16401.herokuapp.com/likes/${likeId}`, {
          method: 'DELETE'
        })
        .catch(error => console.log(error))
        event.target.innerHTML = `${parseInt(event.target.innerHTML) - 1} Like`
      }

    }
  }

  const myProfileButton = () => {
    const myProfile = document.querySelector('.my-profile')
    myProfile.href = `https://blumaa.github.io/finstaglam/profile.html`
  }

  const logOutButton = () => {
    const logOut = document.querySelector('.log-out')
    console.log(logOut)
    logOut.href = `https://blumaa.github.io/finstaglam/index.html`
    logOut.onclick = (event) => {
      localStorage.removeItem("user")
    }
  }
}
main()
