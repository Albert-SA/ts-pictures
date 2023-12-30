const showMoreStyles = (trigger: string, styles: string) => {
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll(styles);
    const btnCard: HTMLDivElement | null = document.querySelector(trigger);
    
    cards.forEach(card => {
        card.classList.add('animated', 'fadeInOut');
    });

    btnCard?.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btnCard.remove();
    })
};

export default showMoreStyles;