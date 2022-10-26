const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
          element.innerText = i + '+';
        } else {
          element.innerText = i;
        }

        i += 100;
        setTimeout(function() {
          increaseNumberAnimationStep(i, element, endNumber)
        }, INCREASE_NUMBER_ANIMATION_SPEED);
    }

    
}

let animationInited = false;

function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    return increaseNumberAnimationStep(0, element, 5000);
}

/* function updateScroll() {
  // Запуск анимации увеличения числа
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;

  if ((windowBottomPosition > countElementPosition) && !animationInited){
    animationInited = true;
    initIncreaseNumberAnimation();
  }
} */

//updateScroll();

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    // Должны добавить еще одно текстовое поле
    const formContainer = document.createElement("div");
    formContainer.classList.add("form__group", "form__other-input");
    
    const input = document.createElement("input");
    input.placeholder = "Введите ваш вариант";
    input.type = "text";

    formContainer.appendChild(input);

    document.querySelector("#form form").insertBefore(formContainer, document.querySelector(".form__submit"));

  }
  const otherInput = document.querySelector(".form__other-input");
  if (event.target.value !== 'other' && Boolean(otherInput)) {
    // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
   

    document.querySelector("#form form").removeChild(otherInput);

  }
});

function updateScroll() {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {    
    header.classList.add("header__scrolled");
  } else {
    header.classList.remove("header__scrolled");
  }
  // Запуск анимации увеличения числа
  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;

  if (windowBottomPosition >= countElementPosition && !animationInited){
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}

window.addEventListener('scroll', updateScroll);

function onLinkClick(event) {
  event.preventDefault();
}

function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}
 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector(".more-button"));