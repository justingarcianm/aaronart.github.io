var people = document.querySelector(".people");
var animals = document.querySelector(".animals");
var objects = document.querySelector(".objects");
var locations = document.querySelector(".locations");
var all = document.querySelector(".all");
var filterImg = document.querySelectorAll(".imgFilter");

var imgPeople = document.querySelectorAll(".row .people");
var imgAnimals = document.querySelectorAll(".row .animals");
var imgObjects = document.querySelectorAll(".row .objects");
var imgLocations = document.querySelectorAll(".row .locations");



people.addEventListener("click", peopleFilter, false);
animals.addEventListener("click", animalFilter, false);
objects.addEventListener("click", objectFilter, false);
locations.addEventListener("click", locationFilter, false);
all.addEventListener("click", allFilter, false);

function peopleFilter() {
    filterImg.forEach(function () {
        all.classList.remove("active");
        animals.classList.remove("active");
        objects.classList.remove("active");
        locations.classList.remove("active");
        people.classList.add("active");
        for (var i = 0; i < filterImg.length; i++) {
            filterImg[i].style.display = "none";
            imgPeople.forEach(function () {
                for (var i = 0; i < imgPeople.length; i++) {
                    imgPeople[i].style.display = 'block';
                }
            })
        }
    })
}
function animalFilter() {
    filterImg.forEach(function () {
        all.classList.remove("active");
        animals.classList.add("active");
        objects.classList.remove("active");
        locations.classList.remove("active");
        people.classList.remove("active");
        for (var i = 0; i < filterImg.length; i++) {
            filterImg[i].style.display = "none";
            imgAnimals.forEach(function () {
                for (var i = 0; i < imgAnimals.length; i++) {
                    imgAnimals[i].style.display = 'block';
                }
            })
        }
    })
}
function objectFilter() {
    filterImg.forEach(function () {
        all.classList.remove("active");
        animals.classList.remove("active");
        objects.classList.add("active");
        locations.classList.remove("active");
        people.classList.remove("active");
        for (var i = 0; i < filterImg.length; i++) {
            filterImg[i].style.display = "none";
            imgObjects.forEach(function () {
                for (var i = 0; i < imgObjects.length; i++) {
                    imgObjects[i].style.display = 'block';
                }
            })
        }
    })
}
function locationFilter() {
    all.classList.remove("active");
    animals.classList.remove("active");
    objects.classList.remove("active");
    locations.classList.add("active");
    people.classList.remove("active");
    filterImg.forEach(function () {
        for (var i = 0; i < filterImg.length; i++) {
            filterImg[i].style.display = "none";
            imgLocations.forEach(function () {
                for (var i = 0; i < imgLocations.length; i++) {
                    imgLocations[i].style.display = 'block';
                }
            })
        }
    })
}
function allFilter() {
    all.classList.add("active");
    animals.classList.remove("active");
    objects.classList.remove("active");
    locations.classList.remove("active");
    people.classList.remove("active");
    filterImg.forEach(function () {
        for (var i = 0; i < filterImg.length; i++) {
            filterImg[i].style.display = "block";
        }
    })
}