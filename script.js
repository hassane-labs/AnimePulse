const btn = document.getElementById("theme-btn");

const setTheme = (isDark) => {
    document.body.classList.toggle("light", !isDark);
    btn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("animepulse-theme", isDark ? "dark" : "light");
};

const savedTheme = localStorage.getItem("animepulse-theme") || "dark";
setTheme(savedTheme === "dark");

btn.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("light");
    setTheme(isDark);
});

const cards = [
    {
        title: "Demon Slayer : le film de la saison atteint un score historique",
        text: "La communauté répond massivement à la dernière bande-annonce avec des montées de tension et de spéculation.",
        category: "News",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
        date: "2h ago"
    },
    {
        title: "Solo Leveling explose les chiffres de streaming",
        text: "L’animation et la musique repoussent les limites pour un title encore plus captivant à chaque semaine.",
        category: "Trending",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=1200&q=80",
        date: "5h ago"
    },
    {
        title: "One Piece confirme le retour d’un arc mythique",
        text: "Des révélations sur les pouvoirs et des cartes de route avancées donnent envie d’en voir plus.",
        category: "Teaser",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
        date: "1d ago"
    },
    {
        title: "Jujutsu Kaisen s’avance vers une nouvelle phase d’attaque",
        text: "Les fans analysent chaque planche et chaque scène de combat à la recherche du détail clé.",
        category: "Analyse",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
        date: "2d ago"
    }
];

const cardsContainer = document.getElementById("cards-container");

cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "card reveal";
    article.innerHTML = `
        <div class="card-image" style="background-image:url('${card.image}')">
            <span class="chip">${card.category}</span>
        </div>
        <div class="card-content">
            <h3>${card.title}</h3>
            <p>${card.text}</p>
            <div class="card-meta">
                <span>${card.date}</span>
                <span>AnimePulse</span>
            </div>
            <button class="btn">Lire l'article</button>
        </div>
    `;
    cardsContainer.appendChild(article);
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const buttons = document.querySelectorAll(".btn, .primary-btn, .secondary-btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add("clicked");
        setTimeout(() => button.classList.remove("clicked"), 250);
    });
});
