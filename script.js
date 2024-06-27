document.querySelectorAll('.appliance-btn').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.dataset.url;
        window.open(url, '_blank');
    });
});