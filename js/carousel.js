// ----------------------------------------
// Mockups carousel
// ----------------------------------------

(function () {
    const carousel = document.getElementById('mockupCarousel');
    if (!carousel) return;

    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const slides = Array.from(track.children);
    const slideCount = slides.length;

    let currentIndex = 0;
    let autoplayTimer = null;
    const AUTOPLAY_DELAY = 20000; // ms

    // Build dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', 'Aller à la diapositive ' + (i + 1));
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    function goToSlide(index) {
        currentIndex = (index + slideCount) % slideCount;
        updateCarousel();
        restartAutoplay();
    }

    window.moveCarousel = function (direction) {
        goToSlide(currentIndex + direction);
    };

    function startAutoplay() {
        autoplayTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        }, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Pause autoplay while the user interacts with the carousel
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Basic swipe support for touch devices
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
            moveCarousel(diff > 0 ? 1 : -1);
        }
        startAutoplay();
    }, { passive: true });

    updateCarousel();
    startAutoplay();
})();