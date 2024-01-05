import {getResource} from '../services/requests';

const showMoreStyles = (trigger: string, wrapper: string) => {
    const btnCard: HTMLDivElement | null = document.querySelector(trigger);

    btnCard?.addEventListener('click', function(this: HTMLButtonElement) {
        // getResource('https://6594307b1493b011606a1a49.mockapi.io/api/v1/styles')
        getResource('/assets/db.json')
            .then(res => createCards(res))
            .catch(error => console.log(error));

        this.remove();
    });

    interface ICard {
        src: string;
        title: string;
        link: string;
    }
    const createCards = (response: ICard[]) => {
        response.forEach(({
            src, 
            title, 
            link
        }: ICard) => {
            const card: HTMLDivElement | null = document.createElement('div');

            card.classList.add('animated', 'fadeInOut', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            
            const appendCard: HTMLDivElement | null = document.querySelector(wrapper);
            appendCard?.append(card);
            
        });
    }
};

export default showMoreStyles;