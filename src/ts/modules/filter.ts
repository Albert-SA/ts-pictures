const filter = () => {
    const menu: HTMLElement | null = document.querySelector('.portfolio-menu');
    if (!menu) return;
    const itemsMenu: NodeListOf<HTMLElement> = menu.querySelectorAll('li');
    const btnAll: HTMLElement | null = menu.querySelector('.all');
    const btnLovers: HTMLElement | null = menu.querySelector('.lovers');
    const btnChef: HTMLElement | null = menu.querySelector('.chef');
    const btnGirl: HTMLElement | null = menu.querySelector('.girl');
    const btnGuy: HTMLElement | null = menu.querySelector('.guy');
    const btnGrandmother: HTMLElement | null = menu.querySelector('.grandmother');
    const btnGrandad: HTMLElement | null = menu.querySelector('.granddad');
    const wrapper: HTMLElement | null = document.querySelector('.portfolio-wrapper');
    if (!wrapper) return;
    const markAll: NodeListOf<HTMLElement> = wrapper.querySelectorAll('.all');
    const markLovers: NodeListOf<HTMLElement> = wrapper.querySelectorAll('.lovers');
    const markChef: NodeListOf<HTMLElement> = wrapper.querySelectorAll('.chef');
    const markGirl: NodeListOf<HTMLElement> = wrapper.querySelectorAll('.girl');
    const markGuy: NodeListOf<HTMLElement> = wrapper.querySelectorAll('.guy');
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

    btnAll?.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLovers?.addEventListener('click', () => {
        typeFilter(markLovers);
    });

    btnChef?.addEventListener('click', () => {
        typeFilter(markChef);
    });

    btnGuy?.addEventListener('click', () => {
        typeFilter(markGuy);
    });

    btnGirl?.addEventListener('click', () => {
        typeFilter(markGirl);
    });

    btnGrandmother?.addEventListener('click', () => {
        typeFilter();
    });

    btnGrandad?.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        const target: any = e.target;

        if (target && target.tagName == 'LI') {
            itemsMenu.forEach(btnMenu => btnMenu.classList.remove('active'));
            target.classList.add('active');
        }
    })
};

export default filter;