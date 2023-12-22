interface IBindModal {
  triggersSelector: string;
  modalSelector: string;
  closeSelector: string;
  destroy: boolean;
};

const modals = () => {

  let btnPressed: boolean = false;

  const bindModal = ({
    triggersSelector,
    modalSelector,
    closeSelector,
    destroy = false,
  }: IBindModal): void => {

    const triggers: NodeListOf<HTMLDivElement> = document.querySelectorAll(triggersSelector);
    const modal: HTMLDivElement | null = document.querySelector(modalSelector);
    const close: HTMLDivElement | null  = document.querySelector(closeSelector);
    const windows: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-modal]');

    const closeModal = (): void => {
      if (!modal) return
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };
  
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (destroy) {
          trigger.remove();
        }

        windows.forEach((window) => {
          window.style.display = 'none';
        });

        if (modal) {
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });

    close?.addEventListener('click', (): void => {
      windows.forEach((window) => {
        window.style.display = 'none';
      });
      closeModal();
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        windows.forEach((window) => {
          window.style.display = 'none';
        });
        closeModal();
      }
    });
  };

  // const showModalByTime = (selector: string, time: number): void => {
  //   const showSelector: HTMLDivElement | null = document.querySelector(selector);
  //   if (!showSelector) return;
  //   setTimeout(() => { 
  //     let display: string = '';
      
  //     document.querySelectorAll('[data-modal]').forEach(modal => {
  //       if(getComputedStyle(modal).display !== 'none') {
  //         display = 'block';
  //       }
  //     });

  //     if (!display) {
  //       showSelector.style.display = 'block';
  //       document.body.style.overflow = 'hidden';
  //     }
  //   }, time);
  // };

  // showModalByTime('.popup-design', 5000);

  const openByScroll = (selector: string): void => {
    window.addEventListener('scroll', () => {
      const showSelector: HTMLDivElement | null = document.querySelector(selector);
      if (!showSelector) return;
      if (!btnPressed && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
        showSelector.click();
      };     
    });
  };

  bindModal({
    triggersSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup-close',
    destroy: false,
  });

  bindModal({
    triggersSelector: '.button-consultation',
    modalSelector: '.popup-consultation',
    closeSelector: '.popup-consultation .popup-close',
    destroy: false,
  });

  bindModal({
    triggersSelector: '.fixed-gift',
    modalSelector: '.popup-gift',
    closeSelector: '.popup-gift .popup-close',
    destroy: true,
  });

  openByScroll('.fixed-gift');
};

export default modals;
