const forms = (): void => {
  const formElems: NodeListOf<HTMLFormElement> = document.querySelectorAll('form');
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся...',
    failure: 'Что-то пошло не так...',
    spinner: '/assets/img/spinner.gif',
    ok: '/assets/img/ok.png',
    fail: '/assets/img/fail.png',
  };

  const postData = async (url: any, data: any) => {
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  const getBase64 = (element: any) => {
    const file = element.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
      console.log(reader.result)
    }
    reader.readAsDataURL(file);
  };

  formElems.forEach((form) => {
    form?.addEventListener('submit', (event) => {
      event.preventDefault();

      const fileImgInput: HTMLInputElement | null = form.querySelector('input[type="file"]');
      const imgInputBase64 = getBase64(fileImgInput);

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      if (!form) return;
      const formParent = form.parentNode;
      if (!formParent) return;
      formParent.appendChild(statusMessage);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display='none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);   

      const formData = new FormData(form);
      // formData.append('upload', imgInputBase64);
      const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
      console.log(jsonData);
      postData('https://server-render-com.onrender.com/api/data', jsonData)
        .then((res) => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
          }, 5000);
        });
    });
  });
};

export default forms;
