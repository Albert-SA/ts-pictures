interface ICalc {
    size: string,
    material: string,
    option: string,
    promocode: string,
    price: string,
};

const calc = ( {size, material, option, promocode, price}: ICalc) => {
    const sizeBlock: any = document.querySelector(size);
    const materialBlock: any = document.querySelector(material);
    const optionBlock: any = document.querySelector(option);
    const promocodeBlock: any = document.querySelector(promocode);
    const priceBlock: any = document.querySelector(price);

    let sum: number = 0;
    const calcSum = () => {
        if (!sizeBlock && !materialBlock && !optionBlock) return;
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionBlock.value));

        if ((sizeBlock.value == '') || (materialBlock.value == '')) {
            priceBlock.textContent = 'ВВЕДИТЕ НЕДОСТАЮЩИЙ РАЗМЕР ЛИБО МАТЕРИАЛ';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
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