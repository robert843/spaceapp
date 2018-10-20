// var STARS = [
//     {
//         name: 'name1',
//         visited: false,
//         coordinates: { x: 10, y: 10 },
//         color: any,
//         img: 'link',
//         description: 'desc'
//     }
// ]

var STARS = new Array();

class Star {
    constructor (starName, starCoordinates, starColor, starImg, starDescription) {
        this.starName = starName;
        this.starCoordinates = starCoordinates;
        this.starColor = starColor;
        this.starImg = starImg;
        this.starDescription = starDescription;
    }

    get dataJSON() {
        return this.generateDataForSave();
    }

    generateDataForSave() {
        let star = new Object();

        star.name = this.starName;
        star.visited = false;
        star.coordinates = this.starCoordinates;
        star.color = this.starColor;
        star.img = this.starImg;
        star.description = this.starDescription;

        return star;
    }

    get getStarDescription() {
        return this.starDescription;
    }

    get getStarThumbnail() {
        return this.generateStarThumbnail();
    }

    generateStarThumbnail() {
        let thumbnail = document.createElement('li'); 
        let thumbnailImg = "url('" + this.starImg + "')";

        thumbnail.setAttribute('data-star-name', this.starName);
        thumbnail.classList.add('exploredElement');
        thumbnail.style.backgroundImage = thumbnailImg;
        return thumbnail;
    }

}

STARS.push(
    new Star(
        'Star1', 
        { 
            x: 10, 
            y: 10 
        }, 
        '#fff',
        "http://placehold.it/400x400?text=generated+1",
        "Lorem ipsum dolor sit 1"
    )
)

STARS.push(
    new Star(
        'Star2', 
        { 
            x: 10, 
            y: 10 
        }, 
        '#fff',
        "http://placehold.it/400x400?text=generated+2",
        "Lorem ipsum dolor sit 2"
    )
)

STARS.push(
    new Star(
        'Star3', 
        { 
            x: 10, 
            y: 10 
        }, 
        '#fff',
        "http://placehold.it/400x400?text=generated+3",
        "Lorem ipsum dolor sit 3"
    )
)

STARS.push(
    new Star(
        'Star4', 
        { 
            x: 10, 
            y: 10 
        }, 
        '#fff',
        "http://placehold.it/400x400?text=generated+4",
        "Lorem ipsum dolor sit 4"
    )
)

function LoadStars(StarsArray) {
    let numberOfDiscoveredStars = StarsArray.length;
    let starsDisplayBox = document.getElementById('exploredElements');

    for (var i = 0; i < numberOfDiscoveredStars; i++) {
        starsDisplayBox.appendChild(StarsArray[i].getStarThumbnail);
    }

}

function LoadStarDescription(ClickedStarDesc) {
    let placeDetails = document.getElementById('placeDetails');
    placeDetails.innerHTML = ClickedStarDesc;
}

LoadStars(STARS);

var exploredElements = document.getElementsByClassName('exploredElement');

for (var element of exploredElements) {
    element.addEventListener('click', function () {
        LoadStarDescription(
            STARS.find(
                x => x.starName === this.dataset.starName
            ).getStarDescription
        )
    })
}

