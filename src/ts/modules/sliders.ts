interface ISliders {
    slidesSelector: string;
    dir: string;
    prev: any;
    next: any;
};

const sliders = ({
    slidesSelector,
    dir, 
    prev, 
    next,
}: ISliders): void => {
    let slideIndex: number = 1;
    let paused: number = 1;
    const INTERVAL_TIME: number = 3000;
    
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll(slidesSelector);

    const showSlides = (n: number): void => {
        if (n > slides.length) {
            slideIndex = 1;
        };

        if (n < 1) {
            slideIndex = slides.length
        };

        slides.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });
        
        slides[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    const plusSlides = (n: number): void => {
        showSlides(slideIndex += n);
    }

    const prevBtn: HTMLElement | null = document.querySelector(prev);
    const nextBtn: HTMLElement | null = document.querySelector(next);

    prevBtn?.addEventListener('click', () => {
        plusSlides(+1);
        slides[slideIndex - 1].classList.remove('slideInLeft');
        slides[slideIndex - 1].classList.add('slideInLRight');
    });

    nextBtn?.addEventListener('click', () => {
        plusSlides(1);
        slides[slideIndex - 1].classList.remove('slideInLRight');
        slides[slideIndex - 1].classList.add('slideInLeft');
    });

    const activateAnimation = () => {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                slides[slideIndex - 1].classList.add('slideInDown');
            }, INTERVAL_TIME);
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                slides[slideIndex - 1].classList.remove('slideInLRight');
                slides[slideIndex - 1].classList.add('slideInLeft');
            }, INTERVAL_TIME);
        }
    };

    activateAnimation();
    
    slides[0].parentNode?.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slides[0].parentNode?.addEventListener('mouseleave', () => {
        activateAnimation();
    });

};

export default sliders;