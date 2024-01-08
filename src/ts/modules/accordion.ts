const accordion = (triggersSelector: string, itemsSelector: string) => {
    const btns: NodeListOf<HTMLElement> = document.querySelectorAll(triggersSelector);
    const blocks: NodeListOf<HTMLElement> = document.querySelectorAll(itemsSelector);

    blocks.forEach(block => {
        block?.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn?.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
        });
    });
};

export default accordion;