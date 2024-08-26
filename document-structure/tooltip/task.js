const hasTooltipLinks = document.querySelectorAll('.has-tooltip');
let title;

hasTooltipLinks.forEach(tooltip => {
    tooltip.insertAdjacentHTML('afterEnd', `
        <div class="tooltip" style="left: ${tooltip.getBoundingClientRect().x}px;" data-position="right">
            ${tooltip.getAttribute('title')}
        </div>
        `);

    tooltip.addEventListener('click', e => {
        e.preventDefault();
        if (title != tooltip.getAttribute('title')) {
            document.querySelectorAll('.tooltip').forEach(el => {
                el.classList.remove('tooltip_active');
            })
            title = tooltip.getAttribute('title');
            tooltip.nextElementSibling.classList.toggle('tooltip_active');
        } else {
            tooltip.nextElementSibling.classList.toggle('tooltip_active');
        }

    })
});





