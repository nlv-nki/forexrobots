let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector('.main-nav');

hamburger.addEventListener("click", function() {

  this.classList.toggle("is-active");

  if(this.classList.contains("is-active")){

    menu.style.display = 'block';
  }
  else {
    console.log(this.classList.contains("is-active"));
    menu.style.display = 'none';

  }
}, false);
var accordion = (function (element) {

  var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };

  return function () {
    var _mainElement = {}, // .accordion
      _items = {}, // .accordion-item
      _contents = {}; // .accordion-item-content


    var _actionClick = function (e) {
      if (!e.target.classList.contains('accordion-item-header')) { // прекращаем выполнение функции если кликнули не по заголовку
        return;
      }
      e.preventDefault();   // Отменям стандартное действие
      // получаем необходимые данные
      var header = e.target,
        item = header.parentElement,
        itemActive = _getItem(_items, 'show');
        console.log(item)

      if (itemActive === undefined) { // добавляем класс show к элементу (в зависимости от выбранного заголовка)
        item.classList.add('show');
      } else {
        // удаляем класс show у ткущего элемента
        itemActive.classList.remove('show');
        // если следующая вкладка не равна активной
        if (itemActive !== item) {
          // добавляем класс show к элементу (в зависимости от выбранного заголовка)
          item.classList.add('show');
        }
      }
    },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener('click', _actionClick);
      };

    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion-item');
        _setupListeners();
      }
    }

  }
})();

var accordion1 = accordion();
accordion1.init('#accordion');
let swiper = new Swiper('.swiper-container', {
  breakpoints: {
// when window width is >= 320px
320: {
  direction: 'vertical', // вертикальная прокрутка
  slidesPerColumnFill: 'row',
  slidesPerView: 2,
  autoHeight: true,
  spaceBetween: 20
},
// when window width is >= 480px
480: {
  slidesPerView: 3,
  spaceBetween: 20,
  direction: 'vertical', // вертикальная прокрутка
  slidesPerColumnFill: 'row',

},
// when window width is >= 640px
640: {
  slidesPerView: 3,
  spaceBetween: 20,
  direction: 'vertical',
},

768: {
  slidesPerView: 3,
  direction: 'horizontal',}

},
direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});