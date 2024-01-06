const pictureSize = (imgSelector: string) => {
    const blocks: NodeListOf<HTMLUListElement> = document.querySelectorAll(imgSelector);

    const showImg = (block: HTMLUListElement) => {
        const img: HTMLImageElement | null = block.querySelector('img');
        if (!img) return;
        img.src = img.src.slice(0, -4) + '-1.png';
        const paragraphs: NodeListOf<HTMLElement> = block.querySelectorAll('p:not(.sizes-hit)');
        paragraphs.forEach(p => {
            p.style.display = 'none';
        });
    }

    const hideImg = (block: HTMLUListElement) => {
        const img: HTMLImageElement | null = block.querySelector('img');
        if (!img) return;
        img.src = img.src.slice(0, -6) + '.png';
        const paragraphs: NodeListOf<HTMLElement> = block.querySelectorAll('p:not(.sizes-hit)');
        paragraphs.forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block?.addEventListener('mouseover', () => {
            showImg(block);
        });
        block?.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });
};

export default pictureSize;