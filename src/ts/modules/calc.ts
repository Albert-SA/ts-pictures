interface ICalc {
    size: string,
    material: string,
    option: string,
    promocode: string,
    price: string,
};

const calc = ( {size, material, option, promocode, price}: ICalc) => {
    const sizeBlock: HTMLElement | null = document.querySelector(size);
    const materialBlock: HTMLElement | null = document.querySelector(material);
    const optionBlock: HTMLElement | null = document.querySelector(option);
    let promocodeBlock: any = document.querySelector(promocode);
    let priceBlock: any = document.querySelector(price);

    let sum: number = 0;
    const calcSum = () => {
        if (!sizeBlock && !materialBlock && !optionBlock) return;
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionBlock.value));

        if ((sizeBlock.value == '') || (materialBlock.value == '')) {
            priceBlock.textContent = 'ВВЕДИТЕ НЕДОСТАЮЩИЙ РАЗМЕР ЛИБО МАТЕРИАЛ';
        } else if (promocodeBlock.value == 'IWANTPOPART') {
            priceBlock.textContent = Math.round(sum * 0.7);
        } else {
            priceBlock.textContent = sum;
        }
    };

    sizeBlock?.addEventListener('change', calcSum);
    materialBlock?.addEventListener('change', calcSum);
    optionBlock?.addEventListener('change', calcSum);
    promocodeBlock?.addEventListener('input', calcSum);
};

export default calc;