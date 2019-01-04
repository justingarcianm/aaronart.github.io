// speed up carousel on index page
$('.carousel').carousel({
    interval: 2000
})

// Terrible and messy yet functional filter for gallery page

// assign variables for filter bar and imgs
var people = document.querySelector(".people"),
    animals = document.querySelector(".animals"),
    objects = document.querySelector(".objects"),
    locations = document.querySelector(".locations"),
    all = document.querySelector(".all"),
    filterImg = document.querySelectorAll(".imgFilter");

// assign variables for images
var imgPeople = document.querySelectorAll(".grid .people"),
    imgAnimals = document.querySelectorAll(".grid .animals"),
    imgObjects = document.querySelectorAll(".grid .objects"),
    imgLocations = document.querySelectorAll(".grid .locations");


//  events for clicking on filter bar
people.addEventListener("click", peopleFilter, false);
animals.addEventListener("click", animalFilter, false);
objects.addEventListener("click", objectFilter, false);
locations.addEventListener("click", locationFilter, false);
all.addEventListener("click", allFilter, false);

// All the functions for the filter bar
// Hides all images other than selected filter
function peopleFilter() {
    filterImg.forEach(function () {
        // remove active class from all buttons
        // add active class to selected button
        all.classList.remove("active");
        animals.classList.remove("active");
        objects.classList.remove("active");
        locations.classList.remove("active");
        people.classList.add("active");
        // for each loop that hides all the images
        for (var i = 0; i < filterImg.length; i++) {
            filterImg[i].style.display = "none";
            imgPeople.forEach(function () {
                // for each loop that shows all of the selected filter
                for (var i = 0; i < imgPeople.length; i++) {
                    imgPeople[i].style.display = 'block';
                }
            })
        }
    })
}
// rinse and repeat for the rest
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
// this simply resets the gallery to its initial state
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
// store image caption link to price variable
var price = document.querySelectorAll(".gallery .imgFilter span");

(function () {
    for (var i = 0; i < price.length; i++) {
        // if the price has the unavailable class
        if (price[i].classList.contains("unavailable")) {
            // replace the link with text
            price[i].textContent = "unavailable";
        }
    }
})();


// Although this is messy and not DRY qualified, my goal was to simple get it to work and in the future I will improve on the code