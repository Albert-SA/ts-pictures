const filter = () => {
    const menu: HTMLElement | null = document.querySelector('.portfolio-menu');
    if (!menu) return;
    const itemsMenu: NodeListOf<HTMLElement> = menu.querySelectorAll('li');
    const wrapper: HTMLElement | null = document.querySelector('.portfolio-wrapper');
    if (!wrapper) return;
    const markAll: NodeListOf<HTMLElement> = wrapper.querySelectorAll('.all');
    const noMark: HTMLElement | null = document.querySelector('.portfolio-no');

    const typeFilter = (markType: NodeListOf<HTMLElement>) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        if (!noMark) return;
        noMark.style.display = 'none';
        noMark.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            noMark.style.display = 'none';
            noMark.classList.remove('animated', 'fadeIn');
        }
    };

    const clickBtnFilter = (ourSelector: string) => {
        const btn: HTMLElement | null = menu.querySelector(ourSelector);
        const mark: NodeListOf<HTMLElement> = wrapper.querySelectorAll(ourSelector);
        
        btn?.addEventListener('click', () => {
            typeFilter(mark);
        });
    };

    clickBtnFilter('.all');
    clickBtnFilter('.lovers');
    clickBtnFilter('.chef');
    clickBtnFilter('.girl');
    clickBtnFilter('.guy');
    clickBtnFilter('.grandmother');
    clickBtnFilter('.granddad');
   
    menu.addEventListener('click', (e) => {
        const target: any = e.target;

        if (target?.tagName === 'LI') {
            itemsMenu.forEach(btnMenu => btnMenu.classList.remove('active'));
            target.classList.add('active');
        }
    })
};

export default filter;