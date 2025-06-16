const gallery = [{
        image: "https://cdn.pixabay.com/photo/2018/02/04/17/11/venice-3130323_1280.jpg",
        title: "Italy",
    },
    {
        image: "https://cdn.pixabay.com/photo/2020/03/24/01/56/london-eye-4962522_1280.jpg",
        title: "London",
    },
    {
        image: "https://cdn.pixabay.com/photo/2022/04/22/20/13/montmartre-7150549_1280.jpg",
        title: "France",
    },
    {
        image: "https://cdn.pixabay.com/photo/2018/02/04/17/11/venice-3130323_1280.jpg",
        title: "Italy",
    },
    {
        image: "https://cdn.pixabay.com/photo/2020/03/24/01/56/london-eye-4962522_1280.jpg",
        title: "London",
    },
    {
        image: "https://cdn.pixabay.com/photo/2022/04/22/20/13/montmartre-7150549_1280.jpg",
        title: "France",
    }
]

const galleryList = document.getElementById("gallary__list")


const markUp = gallery.map(({ image, title }) => `
    <li class="card gallery__item" style="width: 18rem">
        <img src="${image}"
        class="card-img-top"
        alt="${title}" />
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card’s content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </li>
    `).join("")

galleryList.insertAdjacentHTML("beforeend", markUp)