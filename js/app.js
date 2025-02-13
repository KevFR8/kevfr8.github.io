// Theme clair/sombre

const btnToggle = document.querySelector('.btn-toggle')

btnToggle.addEventListener('click', () => {
    const body = document.body;

    if (body.classList.contains('dark')) {
        document.body.classList.add('light')
        document.body.classList.remove('dark')
        btnToggle.innerHTML = "Dark mode (beta)"
    }
    else if (body.classList.contains('light')) {
        document.body.classList.add('dark')
        document.body.classList.remove('light')
        btnToggle.innerHTML = "Light mode"
    }
})



