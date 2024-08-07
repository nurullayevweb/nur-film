const elList = document.querySelector(".movies")

var selectFilm = films.slice(0, 40)



for (var obj of selectFilm) {
    var newItem = document.createElement("li")
    newItem.classList.add("movie")
    var newImg = document.createElement("img")
    var newTitle = document.createElement("h3")
    var newId = document.createElement("p")
    newId.classList.add("movie-id")
    var newData = document.createElement("p")
    newData.classList.add("movie-date")
    var newGanres = document.createElement("p")
    newGanres.classList.add("movie-genres")
    var date = new Date(obj.release_date);
   

    newId.textContent = obj.id;
    newImg.src = obj.poster;
    newImg.alt = obj.title + " film";
    newTitle.textContent = obj.title
    newData.textContent = date.getFullYear();
    newGanres.textContent = obj.genres.join(" ")


    newItem.append(newImg, newTitle, newId, newData, newGanres)
    elList.appendChild(newItem)
}