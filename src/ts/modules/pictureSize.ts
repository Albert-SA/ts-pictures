const pictureSize = (imgSelector: string) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block: any) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';
        const paragraphs: NodeListOf<HTMLElement> = block.querySelectorAll('p:not(.sizes-hit)');
        paragraphs.forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg (block: any) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        const paragraphs: NodeListOf<HTMLElement> = block.querySelectorAll('p:not(.sizes-hit)');
        paragraphs.forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSize;