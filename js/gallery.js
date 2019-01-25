// assign variables for filter bar and imgs
const animals = document.querySelector(".animals"),
    objects = document.querySelector(".objects"),
    locations = document.querySelector(".locations"),
    all = document.querySelector(".all"),
    people = document.querySelector(".people"),
    // assign variables for images
    imgPeople = document.querySelectorAll(".grid .people"),
    imgAnimals = document.querySelectorAll(".grid .animals"),
    imgObjects = document.querySelectorAll(".grid .objects"),
    imgLocations = document.querySelectorAll(".grid .locations"),
    // all grid images and the filter buttons
    filterImg = document.querySelectorAll(".imgFilter"),
    filterButton = document.querySelectorAll(".filterbox button");

// decides which button has been clicked and passes that selection to imageFilter()
function filter(event) {
    if (event.target === people) {
        imageFilter(imgPeople)
    } else if (event.target === all) {
        allFilter()
    } else if (event.target === locations) {
        imageFilter(imgLocations)
    } else if (event.target === objects) {
        imageFilter(imgObjects)
    } else if (event.target === animals) {
        imageFilter(imgAnimals)
    }
}
// filters the images based on the type of image selcted from the focus on bar
function imageFilter(imageType) {
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].style.display = "none";
    }
    for (let i = 0; i < imageType.length; i++) {
        imageType[i].style.display = "block";
    }
}
// resets the filter to display all images
function allFilter() {
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].style.display = "block";
    }
}
// event listener triggers when a button from the focus on bar is clicked
(() => {
    for (let i = 0; i < filterButton.length; i++) {
        filterButton[i].addEventListener("click", filter)
    }
})();





