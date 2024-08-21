const hasTooltipLinks = document.querySelectorAll('.has-tooltip');


hasTooltipLinks.forEach(tooltip => {
    const toltipEl = document.createElement('div');
        toltipEl.classList.add('tooltip');
        toltipEl.innerText = tooltip.getAttribute('title');
        toltipEl.setAttribute('data-position', 'rigth');
        toltipEl.style.left = `${tooltip.getBoundingClientRect().x}px`;
        tooltip.after(toltipEl);


    tooltip.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('.tooltip').forEach(el => {
            el.classList.remove('tooltip_active');
        })
        toltipEl.classList.toggle('tooltip_active');
    })
});