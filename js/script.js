// made with AI cuz im suck at js

// Monopage 
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // 2. Ajouter un écouteur d'événement sur chaque lien
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Empêcher le comportement de lien par défaut
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1); // Récupère l'id sans le '#' (ex: 'setup')
            const targetPage = document.getElementById(targetId);

            // 3. Gérer la visibilité des pages
            pages.forEach(page => {
                page.classList.remove('active'); // Cacher toutes les pages
            });
            targetPage.classList.add('active'); // Afficher seulement la page cible

            // 4. (Bonus) Gérer le style du lien actif
            navLinks.forEach(navLink => {
                navLink.classList.remove('active-link');
            });
            link.classList.add('active-link');
        });
    });
});

// button projects
document.addEventListener('DOMContentLoaded', function () {

    // On sélectionne les éléments nécessaires
    const btnSeeMore = document.getElementById('btn-see-more');
    const btnCloseProjects = document.getElementById('close-projects-btn');

    const initialView = document.getElementById('projects-initial-view');
    const fullView = document.getElementById('projects-full-view');

    if (btnSeeMore && btnCloseProjects && initialView && fullView) {

        // Événement au clic sur "Voir plus"
        btnSeeMore.addEventListener('click', function (e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien '#'
            initialView.style.display = 'none';
            fullView.style.display = 'block';
        });

        // Événement au clic sur le bouton de fermeture
        btnCloseProjects.addEventListener('click', function (e) {
            e.preventDefault();
            fullView.style.display = 'none';
            initialView.style.display = 'block';
        });
    }

});

