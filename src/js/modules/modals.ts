const modals = () => {
  const bindModal = ({
    triggersSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true,
  }: { triggersSelector: string; 
    modalSelector: string; 
    closeSelector: string; 
    closeClickOverlay: boolean; 
  }): void => {

    const triggers: any = document.querySelectorAll(triggersSelector);
    const modal: any = document.querySelector(modalSelector);
    const close: any = document.querySelector(closeSelector);
    const windows: any = document.querySelectorAll('[data-modal]');

    const closeModal = (): void => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    triggers.forEach((trigger: any) => {
      trigger.addEventListener('click', (e: any) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((window: any) => {
          window.style.display = 'none';
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

    close.addEventListener('click', () => {
      windows.forEach((window: any) => {
        window.style.display = 'none';
      });
      closeModal();
    });

    modal.addEventListener('click', (e: any) => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach((window: any) => {
          window.style.display = 'none';
        });
        closeModal();
      }
    });

    document.addEventListener('keydown', (e: any) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });
  };

  bindModal({
    triggersSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup_close',
    closeClickOverlay: true,
  });
};

export default modals;
