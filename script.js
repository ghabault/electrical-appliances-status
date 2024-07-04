document.querySelectorAll('.appliance-btn').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.dataset.url;
        window.open(url, '_blank');
    });
});

const getLongestAndSetWidth = cssClass => {
    const group = document.querySelectorAll('.'+cssClass)
    const longest = Math.max(...[...group].map(e => e.offsetWidth))
    group.forEach(e => e.style.width = longest+'px')
    return
}

getLongestAndSetWidth('appliance-title')
window.addEventListener('resize', getLongestAndSetWidth('appliance-title'))