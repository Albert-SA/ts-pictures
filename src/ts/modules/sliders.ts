interface ISliders {
    slides: string;
    dir: string;
    prev: string;
    next: string;
};

const sliders = ({
    slides,
    dir, 
    prev, 
    next,
}: ISliders): void => {
    let slideIndex: number = 1;
    let paused: number = 1;
    
    const items: NodeListOf<HTMLElement> = document.querySelectorAll(slides);

    const showSlides = (n: number): void => {
        if (n > items.length) {
            slideIndex = 1;
        };

        if (n < 1) {
            slideIndex = items.length
        };

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        
        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    const plusSlides = (n: number): void => {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn: HTMLElement | null = document.querySelector(prev);
        const nextBtn: HTMLElement | null = document.querySelector(next);

        prevBtn?.addEventListener('click', () => {
            plusSlides(+1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInLRight');
        });

        nextBtn?.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInLRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e){}

    const activateAnimation = () => {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInLRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    };

    activateAnimation();
    
    items[0].parentNode?.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode?.addEventListener('mouseleave', () => {
        activateAnimation();
    });

};

export default sliders;