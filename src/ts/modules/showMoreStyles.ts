import {getResource} from '../services/requests';

const showMoreStyles = (trigger: string, wrapper: any) => {
    const btnCard: HTMLDivElement | null = document.querySelector(trigger);

    btnCard?.addEventListener('click', function(this: any) {
        getResource('./public/assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));

        this.remove();
    });

    interface ICards {
        src: string;
        title: string;
        link: string;
    }
    const createCards = (response: any) => {
        response.forEach(({
            src, 
            title, 
            link
        }: ICards) => {
            let card: HTMLDivElement | null = document.createElement('div');

            card.classList.add('animated', 'fadeInOut', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            
            if (!wrapper) return;
            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;