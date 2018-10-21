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
        "../assets/achivements/place1.png",
        `<img class="achivementsImg" src="../assets/achivements/place1.png">
        This image shows a massive galaxy cluster embedded in the middle of a field of nearly 8,000 galaxies scattered across space and time. This "galaxies galore" snapshot is from a new Hubble Space Telescope survey to boldly expand its view by significantly enlarging the area covered around huge galaxy clusters previously photographed by Hubble.<br>
        The program, called Beyond Ultra-deep Frontier Fields And Legacy Observations (BUFFALO), is built around the six massive galaxy clusters that Hubble first observed under its Frontier Fields program.<br>        
        In this view the huge cluster Abell 370, located about 4 billion light-years away, lies in the center of this image. It contains several hundred galaxies. The mosaic of fields flanking the cluster contains myriad background galaxies flung across space and time.<br>        
        Massive galaxy clusters like Abell 370 are mainly composed of dark matter. Their large masses distort space, turning them into gravitational lenses that magnify and distort the light coming from distant background galaxies. The Frontier Fields program, a previous joint effort from NASA's Great Observatories to study several clusters, allowed for the discovery of background galaxies and supernovas that are so distant and faint that they could not have been photographed by Hubble without the aid of this additional gravitational amplification.<br>        
        The regions that Hubble will map for BUFFALO were previously observed by NASA’s Spitzer Space Telescope for the Frontier Fields program, in which Spitzer and Hubble worked together to detect and study some of the universe’s earliest galaxies. Spitzer imaged a much larger area of the sky than Hubble but could not measure the distances to the galaxies it observed in those regions.<br>        
        With BUFFALO, Hubble is now coming back to the full area of sky covered by Spitzer, to measure the distances to thousands of galaxies. This is important because the six fields observed by Hubble are relatively small and might not fully represent the number of early galaxies in the wider universe. Abell 370 is the first cluster to be observed.<br>        
        An important motive for the BUFFALO program is the possibility that there may be significantly fewer than predicted extremely distant galaxies found in the Frontier Fields survey. This led astronomers to propose expanding the search area around each Frontier Fields cluster to seek out more distant galaxies, and therefore more accurately determine the numbers of such galaxies.<br>
        Although the Frontier Fields have already discovered some of the earliest galaxies, these fields are comparatively small and so may not represent the universe at large. This dilemma for cosmologists is called cosmic variance. By expanding the survey area, such uncertainties in the structure of the universe can be reduced.<br>        
        This means conducting a concise census of the first galaxies in as wide of an area as feasible. The goal is to improve the probability of identifying some of the rare regions of space with a concentration of early galaxies and the far more common regions that had not yet been able to form galaxies so quickly.<br>        
        Because Frontier Fields observations have already established what the first galaxies look like, the wider area of BUFFALO will enable searches for these galaxies several times more efficiently than the original Frontier Fields. It will also take advantage of observations from other space telescopes, including ultra-deep Spitzer Space Telescope observations that already exist around these clusters.<br>        
        The BUFFALO program is designed to identify galaxies in their earliest stages of formation, less than 800 million years after the big bang. These galaxies should help shed light on the processes by which galaxies first assembled. One of BUFFALO’s key goals is to determine how rapidly galaxies formed in this early epoch. This will help astronomers design strategies for using NASA's upcoming James Webb Space Telescope to probe the distant universe with its infrared vision.<br>        
        Astronomers anticipate that the survey will yield new insights into when the most massive and luminous galaxies formed and how they are linked to dark matter, and how the dynamics of the clusters influence the galaxies in and around them. The survey also will provide a chance to pinpoint images of distant galaxies and supernovas.<br>    
        The BUFFALO program is jointly led by Charles Steinhardt (Niels Bohr Institute, University of Copenhagen) and Mathilde Jauzac (Durham University, UK), and involves an international team of nearly 100 astronomers from 13 countries, including experts in theory, in computer simulations, and in observations of early galactic evolution, gravitational lensing, and supernovas. Approximately 160 hours of Hubble observing time is scheduled for the BUFFALO project.<br>
        The Hubble Space Telescope is a project of international cooperation between NASA and ESA (European Space Agency). NASA's Goddard Space Flight Center in Greenbelt, Maryland, manages the telescope. The Space Telescope Science Institute (STScI) in Baltimore, Maryland, conducts Hubble science operations. STScI is operated for NASA by the Association of Universities for Research in Astronomy, in Washington, D.C.`
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
        "../assets/achivements/place2.png",
        `<img class="achivementsImg" src="../assets/achivements/place2.png">
        Hubble 28th Anniversary Image in Infrared Shows Promise of Webb Telescope<br>
        This star-filled image, taken by NASA’s Hubble Space Telescope in near-infrared wavelengths of light, reveals a very different view of the Lagoon Nebula compared to its visible-light portrait. Making infrared observations of the cosmos allows astronomers to penetrate vast clouds of gas and dust to uncover hidden gems. Hubble’s view offers a sneak peek at the dramatic vistas NASA’s James Webb Space Telescope will provide.<br>
        The most obvious difference between Hubble’s infrared and visible photos of this region is the abundance of stars that fill the infrared field of view. Most of them are more distant, background stars located behind the nebula itself. However, some of these pinpricks of light are young stars within the Lagoon Nebula. The brilliant star near the center of the frame, known as Herschel 36, is about 200,000 times brighter than our Sun.<br>
        This hefty star is 32 times more massive and eight times hotter than our Sun. Its powerful ultraviolet radiation and fierce stellar winds are carving away the surrounding nebula, removing the raw materials that smaller stars need to form. Dark smudges known as Bok globules mark the thickest parts of the nebula, where dust protects still-forming stars and their planets. While Hubble cannot penetrate these dusty clumps, Webb will be able to see through them.<br>
        Webb will probe young stars still in the process of forming. It also will examine the disks of dust and gas surrounding those stars, known as protoplanetary disks, in order to determine how far the planet formation process has proceeded. Webb will determine whether the inner regions of those disks have been cleared out, the dust either swept up by protoplanets or swept away by stellar winds.<br>
        Webb could take a stellar census of the Lagoon Nebula to determine not only how many massive stars it contains, but also how many Sun-like stars and how many failed stars known as brown dwarfs. This would enable astronomers to get the big picture of the stellar population across the entire range of masses, particularly at the low end.<br>
        The image shows a region of the nebula measuring about 4 light-years across. The observations were taken by Hubble’s Wide Field Camera 3 between Feb. 12 and Feb. 18, 2018.`
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
        "../assets/achivements/place3.png",
        `<img class="achivementsImg" src="../assets/achivements/place3.png">
        [Upper right] —This is a Hubble Space Telescope image of galaxy NGC 1277. The galaxy is unique in that it is considered a relic of what galaxies were like in the early universe. The galaxy is composed exclusively of aging stars that were born 10 billion years ago. But unlike other galaxies in the local universe, it has not undergone any further star formation. Astronomers nickname such galaxies as "red and dead," because the stars are aging and there aren't any successive generations of younger stars.<br>
        The telltale sign of the galaxy's "arrested development" lies in the ancient globular clusters that swarm around it. The reddish clusters are the strongest evidence that the galaxy went out of the star-making business long ago. Otherwise, there would be a lot of blue globular star clusters, which are largely absent. The lack of blue clusters suggests that NGC 1277 never grew further by gobbling up surrounding galaxies.<br>
        [Background image] — The galaxy lives near the center of the Perseus cluster of over 1,000 galaxies, located 240 million light-years away from Earth. NGC 1277 is moving so fast through the cluster, at 2 million miles per hour, that it cannot merge with other galaxies to collect stars or pull in gas to fuel star formation. In addition, near the galaxy cluster center, intergalactic gas is so hot it cannot cool to condense and form stars.`
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
        "../assets/achivements/place4.png",
        `<img class="achivementsImg" src="../assets/achivements/place4.png">
        It’s beginning to look a lot like the holiday season in this NASA Hubble Space Telescope image of a blizzard of stars, which resembles a swirling snowstorm in a snow globe.<br>
        The stars are residents of the globular star cluster Messier 79, or M79, located 41,000 light-years from Earth, in the constellation Lepus. The cluster is also known as NGC 1904.<br>
        Globular clusters are gravitationally bound groupings of as many as 1 million stars. M79 contains about 150,000 stars packed into an area measuring only 118 light-years across. These giant “star-globes” contain some of the oldest stars in our galaxy, estimated to be 11.7 billion years old.<br>
        Most globular clusters are grouped around the central hub of our pinwheel-shaped galaxy. However, M79’s home is nearly on the opposite side of the sky from the direction of the galactic center. One idea for the cluster’s unusual location is that its neighborhood may contain a higher-than-average density of stars, which fueled its formation. Another possibility is that M79 may have formed in an unusual dwarf galaxy that is merging with the Milky Way.<br>
        In the Hubble image, Sun-like stars appear yellow. The reddish stars are bright giants that represent the final stages of a star’s life. Most of the blue stars sprinkled throughout the cluster are aging “helium-burning” stars. These bright blue stars have exhausted their hydrogen fuel and are now fusing helium in their cores.<br>
        A scattering of fainter blue stars are “blue stragglers.” These unusual stars glow in blue light, mimicking the appearance of hot, young stars. Blue stragglers form either by the merger of stars in a binary system or by the collision of two unrelated stars in M79’s crowded core.<br>
        The star cluster was discovered by Pierre Méchain in 1780. Méchain reported the finding to Charles Messier, who included it in his catalog of non-cometary objects. About four years later, using a larger telescope than Messier’s, William Herschel resolved the stars in M79, and described it as a “globular star cluster.”<br>
        The image is a combination of observations taken in 1995 and 1997 by Hubble’s Wide Field Planetary Camera 2. The red, green, and blue colors used to compose the image represent a natural view of the cluster.<br>
        The Hubble Space Telescope is a project of international cooperation between NASA and ESA (European Space Agency). NASA's Goddard Space Flight Center in Greenbelt, Maryland, manages the telescope. The Space Telescope Science Institute (STScI) in Baltimore, Maryland, conducts Hubble science operations. STScI is operated for NASA by the Association of Universities for Research in Astronomy, Inc., in Washington, D.C.`
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

