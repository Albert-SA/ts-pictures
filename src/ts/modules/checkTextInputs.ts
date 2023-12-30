const checkTextInputs = (selector: string): void => {
    const txtInputs: NodeListOf<HTMLElement> = document.querySelectorAll(selector);

    txtInputs.forEach((input) => {
        input.addEventListener('keypress', (event) => {
            if (event.key.match(/[^а-яё 0-9]/ig)) {
                event.preventDefault();
            }
        });
    })
};

export default checkTextInputs;