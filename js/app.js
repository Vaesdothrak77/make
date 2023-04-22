gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          end: "top",
          scrub: true,
        },
      }
    );
  });
}

// const form = document.querySelector('.contact-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const phoneInput = document.querySelector('#phone');

// const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Проверка поля Имя
//   if (nameInput.value.trim() === '') {
//     setErrorFor(nameInput, 'Имя не может быть пустым');
//   } else {
//     setSuccessFor(nameInput);
//   }

//   // Проверка поля Почта
//   if (emailInput.value.trim() === '') {
//     setErrorFor(emailInput, 'Почта не может быть пустой');
//   } else if (!isValidEmail(emailInput.value)) {
//     setErrorFor(emailInput, 'Некорректный адрес почты');
//   } else {
//     setSuccessFor(emailInput);
//   }

//   // Проверка поля Номер телефона
//   if (phoneInput.value.trim() === '') {
//     setErrorFor(phoneInput, 'Номер телефона не может быть пустым');
//   } else if (!phoneRegex.test(phoneInput.value)) {
//     setErrorFor(phoneInput, 'Некорректный номер телефона');
//   } else {
//     setSuccessFor(phoneInput);
//   }

//   // Если все поля заполнены корректно, можно отправить форму
//   if (
//     nameInput.parentElement.classList.contains('success') &&
//     emailInput.parentElement.classList.contains('success') &&
//     phoneInput.parentElement.classList.contains('success')
//   ) {
//     form.submit();
//   }
// });

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const errorMessage = formControl.querySelector('.contact-form__error-message');
//   formControl.classList.remove('success');
//   formControl.classList.add('error');
//   errorMessage.innerText = message;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.classList.remove('error');
//   formControl.classList.add('success');
// }

// function isValidEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }
// return isValid;
// }
