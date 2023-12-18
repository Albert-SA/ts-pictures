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

    const triggers: NodeListOf<HTMLDivElement> = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector) as HTMLDivElement;
    const close = document.querySelector(closeSelector) as HTMLDivElement;
    const windows: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-modal]');

    const closeModal = (): void => {
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    };
  
    triggers?.forEach((trigger: HTMLDivElement) => {
      trigger?.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows?.forEach((window: HTMLDivElement) => {
          if (window) {
          window.style.display = 'none';
          }
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
      windows?.forEach((window: HTMLDivElement) => {
        if (window) {
        window.style.display = 'none';
        }
      });
      closeModal();
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windows?.forEach((window: HTMLDivElement) => {
          if (window) {
          window.style.display = 'none';
          }
        });
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

  bindModal({
    triggersSelector: '.button-consultation',
    modalSelector: '.popup-consultation',
    closeSelector: '.popup-consultation .popup_close',
    closeClickOverlay: true,
  });

};

export default modals;
