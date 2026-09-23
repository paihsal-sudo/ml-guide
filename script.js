/* ==================================================
   DATA HERO
================================================== */

const heroes = [

    {
        name: "Tigreal",
        role: "Tank",
        icon: "🛡️",
        description:
            "Hero dengan kemampuan pertahanan dan crowd control."
    },

    {
        name: "Alucard",
        role: "Fighter",
        icon: "⚔️",
        description:
            "Hero fighter yang berfokus pada pertarungan jarak dekat."
    },

    {
        name: "Saber",
        role: "Assassin",
        icon: "🗡️",
        description:
            "Hero assassin yang dapat memberikan serangan cepat kepada target."
    },

    {
        name: "Eudora",
        role: "Mage",
        icon: "🔮",
        description:
            "Hero mage yang mengandalkan kemampuan magic dan burst damage."
    },

    {
        name: "Miya",
        role: "Marksman",
        icon: "🏹",
        description:
            "Hero marksman dengan kemampuan serangan jarak jauh."
    },

    {
        name: "Rafaela",
        role: "Support",
        icon: "💚",
        description:
            "Hero support yang membantu anggota tim dengan kemampuan pendukung."
    },

    {
        name: "Balmond",
        role: "Fighter",
        icon: "🪓",
        description:
            "Hero fighter yang memiliki kemampuan bertahan dan menyerang."
    },

    {
        name: "Nana",
        role: "Mage",
        icon: "✨",
        description:
            "Hero mage dengan kemampuan magic dan efek pengganggu."
    }

];


/* ==================================================
   ELEMENT
================================================== */

const heroList =
    document.getElementById("heroList");

const heroSearch =
    document.getElementById("heroSearch");

const themeButton =
    document.getElementById("themeButton");

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalIcon =
    document.getElementById("modalIcon");


/* ==================================================
   MENAMPILKAN HERO
================================================== */

function displayHeroes(heroData) {

    heroList.innerHTML = "";


    if (heroData.length === 0) {

        heroList.innerHTML = `
            <div class="hero-item">
                <h3>Hero tidak ditemukan</h3>

                <p>
                    Coba gunakan kata pencarian lain.
                </p>
            </div>
        `;

        return;
    }


    heroData.forEach(hero => {

        const card =
            document.createElement("article");

        card.className = "hero-item";


        card.innerHTML = `

            <div class="hero-avatar">
                ${hero.icon}
            </div>

            <h3>
                ${hero.name}
            </h3>

            <small>
                ${hero.role}
            </small>

            <p>
                ${hero.description}
            </p>

        `;


        card.addEventListener("click", () => {

            openModal(
                hero.name,
                hero.description,
                hero.icon
            );

        });


        heroList.appendChild(card);

    });

}


/* ==================================================
   PENCARIAN HERO
================================================== */

heroSearch.addEventListener(
    "input",
    function () {

        const keyword =
            this.value
                .toLowerCase()
                .trim();


        const filteredHeroes =
            heroes.filter(hero =>

                hero.name
                    .toLowerCase()
                    .includes(keyword)

                ||

                hero.role
                    .toLowerCase()
                    .includes(keyword)

            );


        displayHeroes(filteredHeroes);

    }
);


/* ==================================================
   MODAL
================================================== */

function openModal(
    title,
    description,
    icon = "⚔️"
) {

    modalTitle.textContent =
        title;

    modalDescription.textContent =
        description;

    modalIcon.textContent =
        icon;

    modal.classList.add("active");

}


function closeModalWindow() {

    modal.classList.remove(
        "active"
    );

}


closeModal.addEventListener(
    "click",
    closeModalWindow
);


modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            closeModalWindow();

        }

    }
);


/* ==================================================
   ROLE MODAL
================================================== */

const roleCards =
    document.querySelectorAll(
        ".role-card"
    );


roleCards.forEach(card => {

    card.addEventListener(
        "click",
        function() {

            const title =
                this.dataset.title;

            const description =
                this.dataset.description;

            const icon =
                this.querySelector(
                    "span"
                ).textContent;


            openModal(
                title,
                description,
                icon
            );

        }
    );

});


/* ==================================================
   DARK / LIGHT MODE
================================================== */

themeButton.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "light"
        );


        const isLight =
            document.body.classList.contains(
                "light"
            );


        if (isLight) {

            themeButton.textContent =
                "☀️";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeButton.textContent =
                "🌙";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    }
);


/* ==================================================
   MEMU MOBILE
================================================== */

menuButton.addEventListener(
    "click",
    function() {

        navMenu.classList.toggle(
            "active"
        );

    }
);


/* ==================================================
   MENUTUP MENU MOBILE
================================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function() {

            navMenu.classList.remove(
                "active"
            );

        }
    );

});


/* ==================================================
   KEYBOARD ESC UNTUK MODAL
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModalWindow();

        }

    }
);


/* ==================================================
   LOAD THEME
================================================== */

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light"
        );

        themeButton.textContent =
            "☀️";

    }

}