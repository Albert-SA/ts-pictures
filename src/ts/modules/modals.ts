interface IBindModal {
  triggersSelector: string;
  modalSelector: string;
  closeSelector: string;
  closeClickOverlay: boolean;
};

const modals = () => {
  const bindModal = ({
    triggersSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true,
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
      if (e.target === modal && closeClickOverlay) {
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
  //     let display: string;
      
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

  bindModal({
    triggersSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup-close',
    closeClickOverlay: true,
  });

  bindModal({
    triggersSelector: '.button-consultation',
    modalSelector: '.popup-consultation',
    closeSelector: '.popup-consultation .popup-close',
    closeClickOverlay: true,
  });
};

export default modals;
