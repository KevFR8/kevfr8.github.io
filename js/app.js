// Variable
const btnToggle = document.querySelector('.btn-toggle');
const body = document.body;

// Check si le thème est sauvegardé au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('light', 'dark');
        body.classList.add(savedTheme);

        if (savedTheme === 'dark') {
            kcLogo.src = './images/misc/kc_darkmode.png';
            githubIcon.style.color = 'rgb(255, 255, 255)';
            btnToggle.innerHTML = "Light mode";
        } else {
            kcLogo.src = './images/misc/kc_lightmode.png';
            githubIcon.style.color = 'rgb(0, 0, 0)';
            btnToggle.innerHTML = "Dark mode (beta)";
        }
    }
});

// Button pour activer le thème
btnToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        kcLogo.src = './images/misc/kc_lightmode.png';
        githubIcon.style.color = 'rgb(0, 0, 0)';
        body.classList.add('light');
        body.classList.remove('dark');
        btnToggle.innerHTML = "Dark mode (beta)";
        localStorage.setItem('theme', 'light');
    }
    else if (body.classList.contains('light')) {
        kcLogo.src = './images/misc/kc_darkmode.png';
        githubIcon.style.color = 'rgb(255, 255, 255)';
        body.classList.add('dark');
        body.classList.remove('light');
        btnToggle.innerHTML = "Light mode";
        localStorage.setItem('theme', 'dark');
    }
});