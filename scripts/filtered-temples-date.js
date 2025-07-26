const today = new Date();
const copyYear = document.getElementById("currentyear");
const modifiedDate = document.getElementById("lastModified")
document.addEventListener('DOMContentLoaded',
    function () {
        copyYear.textContent = today.getFullYear();
        modifiedDate.textContent = "Last Modification: " + document.lastModified;
    }
);

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


const temples = [
    {
        templeName: "Brasília Brazil",
        location: "Brasília, Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-thumb.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-6697.jpg"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho, United States",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-1057-main.jpg"
    },
    {
        templeName: "Curitiba Brazil",
        location: "Curitiba, Brazil",
        dedicated: "2008, June, 01",
        area: 27850,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-15571-thumb.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-thumb.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25-30",
        area: 72000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-62045-thumb.jpg"
    },
    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8-14",
        area: 104000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40476-thumb.jpg"
    },
    {
        templeName: "Provo City Center Utah",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-11074-thumb.jpg"
    }
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section")
        let name = document.createElement("h3")
        let location = document.createElement("p")
        let dedication = document.createElement("p")
        let area = document.createElement("p")
        let img = document.createElement("img")

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("height", 200)
        img.setAttribute("width", 300)

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    })
}

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    createTempleCard(temples)
})

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const date = new Date(temple.dedicated);
        return date.getFullYear() < 1900;
    }));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const date = new Date(temple.dedicated);
        return date.getFullYear() > 2000;
    }));
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

