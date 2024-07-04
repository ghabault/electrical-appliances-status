document.querySelectorAll('.appliance-btn').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.dataset.url;
        window.open(url, '_blank');
    });
});

// ! set longest width for a class
const getLongestAndSetWidth = cssClass => {
    const group = document.querySelectorAll('.'+cssClass)
    const longest = Math.max(...[...group].map(e => e.offsetWidth))
    group.forEach(e => e.style.width = longest+'px')
    return
}

// ! handle input range values 
const inputRanges = document.querySelectorAll('.custom-range > input[type="range"]')
inputRanges.forEach(e => {
    const output = document.createElement('span')
    output.classList.add('custom-range-output')
    output.textContent = e.value+'%'
    e.parentNode.insertAdjacentElement("afterend", output)
    e.addEventListener('input', event => output.textContent = event.target.value+"%")
    e.addEventListener('mouseup', event => {/* action quand on lache la souris de l'input */})
    e.addEventListener('touchend', event => {/* action quand on lache le doigt de l'input */})
    return
})

// * init
getLongestAndSetWidth('appliance-title')
window.addEventListener('resize', getLongestAndSetWidth('appliance-title'))