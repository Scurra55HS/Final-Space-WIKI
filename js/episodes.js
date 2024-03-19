async function fetchEpisodes() {
    try {
        const response = await fetch('https://finalspaceapi.com/api/v0/episode/');
        const episodes = await response.json();

        const episodesDiv = document.getElementById('episodes');
        episodesDiv.innerHTML = '';

        episodes.forEach(episode => {
            const episodeCard = document.createElement('div');
            episodeCard.classList.add('episode-card');
            episodeCard.innerHTML = `
                <h2>${episode.name}</h2>
                <img src="${episode.img_url}" alt="${episode.name}">
                <p><strong>Episode:</strong> ${episode.name}</p>
                <p><strong>Air Date:</strong> ${episode.air_date}</p>
                <p><strong>Director:</strong> ${episode.director}</p>
                <p><strong>Writer:</strong> ${episode.writer}</p>
            `;
            episodesDiv.appendChild(episodeCard);
        });
    } catch (error) {
        console.error('Erro ao buscar episódios:', error);
    }
}

fetchEpisodes();

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

    