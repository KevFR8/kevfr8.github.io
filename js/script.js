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

// --- NOUVEAU CODE POUR LA VUE OS-MOCKUPS ---
document.addEventListener('DOMContentLoaded', function () {

    // On sélectionne les éléments nécessaires
    const osMockupCard = document.getElementById('os-mockup-card');
    const closeOsMockupsBtn = document.getElementById('close-os-mockups-btn');

    const projectsFullView = document.getElementById('projects-full-view');
    const osMockupsView = document.getElementById('os-mockups-view');

    // On s'assure que tous les éléments existent avant d'ajouter les écouteurs
    if (osMockupCard && closeOsMockupsBtn && projectsFullView && osMockupsView) {

        // Événement au clic sur la carte "OS-mockups"
        osMockupCard.addEventListener('click', function (e) {
            e.preventDefault(); // Empêche tout comportement par défaut
            projectsFullView.style.display = 'none'; // Cache la vue complète des projets
            osMockupsView.style.display = 'block';   // Affiche la vue des mockups
        });

        // Événement au clic sur le bouton de retour
        closeOsMockupsBtn.addEventListener('click', function (e) {
            e.preventDefault();
            osMockupsView.style.display = 'none';      // Cache la vue des mockups
            projectsFullView.style.display = 'block'; // Ré-affiche la vue complète des projets
        });
    }
});


// same things as os mockup btn but for changelog
document.addEventListener('DOMContentLoaded', function () {
    const btnChangelog = document.getElementById('btn-changelog');
    const closeChangelogBtn = document.getElementById('close-changelog-btn');
    const aboutInitialView = document.getElementById('about-initial-view');
    const changelogView = document.getElementById('changelog-view');

    if (btnChangelog && closeChangelogBtn && aboutInitialView && changelogView) {
        // Événement au clic sur "Version 2.05"
        btnChangelog.addEventListener('click', function (e) {
            e.preventDefault();
            aboutInitialView.style.display = 'none';
            changelogView.style.display = 'block';
        });

        // Événement au clic sur la croix de fermeture
        closeChangelogBtn.addEventListener('click', function (e) {
            e.preventDefault();
            changelogView.style.display = 'none';
            aboutInitialView.style.display = 'block';
        });
    }
});