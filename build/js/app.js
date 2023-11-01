const showOnPx = 200;
const backToTopButton = document.getElementById('to-top-button');

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove('hidden');
        backToTopButton.classList.add('grid');
    } else {
        backToTopButton.classList.add('hidden');
        backToTopButton.classList.remove('grid');
    }
});

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
