document.addEventListener("DOMContentLoaded", function(event) {

  // Smooth scroll for links
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');

          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };

  // Media query
  const mediaQuery970 = window.matchMedia('(max-width: 970px)');
  const mediaQuery1024 = window.matchMedia('(max-width: 1024px)');

  // Burger menu
  document.querySelector('.header-top__burger').addEventListener('click', function(){
    document.querySelector('.header-top__burger span').classList.toggle('active');
    document.querySelector('.header-top__menu-wrapper').classList.toggle("animate");
    document.querySelector('.header-top__search').classList.toggle("index");
    document.querySelector('.header-top__form').classList.toggle("index");
    document.querySelector('body').classList.toggle("overflow");
  });

  // Gallery modal
  document.querySelectorAll('.gallery__slide').forEach(function(gallerySlide){
    gallerySlide.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      document.querySelector('body').classList.toggle("overflow");
      document.querySelector(`[data-target="${path}"]`).classList.add('display');
    });
  });

  document.querySelectorAll('.gallery__close').forEach(function(gc){
    gc.addEventListener('click', function(e){
      document.querySelectorAll('.gallery__modal-wrapper').forEach(function(r){
        r.classList.remove('display');
      });
      document.querySelector('body').classList.remove("overflow");
    });
  });

  // Search field
  document.querySelector('.header-top__search').addEventListener('click', function(){
    document.querySelector('.header-top__form').classList.toggle("animate");
    document.querySelector('.header-top__search').classList.toggle("active");
  });

  // Dropdown in bottom-menu
  document.querySelectorAll(".header-bottom__choice").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header-bottom__dropdown-wrapper");
      
      document.querySelectorAll(".header-bottom__choice").forEach(el => {
        if (el != btn) {
          el.classList.remove("header-bottom__choice_active");
        }
      });

      document.querySelectorAll(".header-bottom__dropdown-wrapper").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("header-bottom__dropdown-wrapper_active");
        }
      })
      dropdown.classList.toggle("header-bottom__dropdown-wrapper_active");
      btn.classList.toggle("header-bottom__choice_active")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-bottom__list")) {
      document.querySelectorAll(".header-bottom__choice").forEach(el => {
        el.classList.remove("header-bottom__choice_active");
      })
      document.querySelectorAll(".header-bottom__dropdown-wrapper").forEach(el => {
        el.classList.remove("header-bottom__dropdown-wrapper_active");
      })
    }
  })

  // Gallery selector
  const element = document.querySelector('#selectGallery');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false
  });

  // Hero swiper
  const swiper = new Swiper('.header__swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 700
  });

  // Gallery swiper
  const swiper2 = new Swiper('.gallery__swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 38,
    slidesPerGroup: 1,
    breakpoints: {
      671: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2
      },
      970: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },
      1601: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },
    navigation: {
      nextEl: '.gallery__btn-next',
      prevEl: '.gallery__btn-prev',
    },
    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    }
  });

  // Events swiper
  const swiper3 = new Swiper('.events__swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 34,
    slidesPerGroup: 1,
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },
      970: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },
    navigation: {
      nextEl: '.events__btn-next',
      prevEl: '.events__btn-prev',
    },
    pagination: {
      el: '.events__pagination',
      clickable: true,
    },
  });

  // Project swiper
  const swiper4 = new Swiper('.projects__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 34,
    slidesPerGroup: 1,
    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      },
    },
    navigation: {
      nextEl: '.projects__btn-next',
      prevEl: '.projects__btn-prev',
    }
  });

  // Scroll to author after click on name in mobile
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__btn').forEach(function(btn){
        btn.classList.remove('tabs__btn_active')});
        e.currentTarget.classList.add('tabs__btn_active');
      document.querySelectorAll('.catalog__content').forEach(function(tabsBtn){
        tabsBtn.classList.remove('catalog__content_active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content_active');
      if (mediaQuery970.matches) {
        document.querySelector('.catalog__persons').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      }
    });
  });

  // Close burger menu after click on link
  document.querySelectorAll('.header-top__link').forEach(function(navlink){
    navlink.addEventListener('click', function(){
      if (mediaQuery1024.matches) {
        document.querySelector('.header-top__burger span').classList.toggle('active');
        document.querySelector('.header-top__menu-wrapper').classList.toggle("animate");
        document.querySelector('body').classList.toggle("overflow");
      }
    });
  });

  // Tooltip1
  const mark1 = document.querySelector('#mark1');
  const tooltip1 = document.querySelector('#tooltip1');

  const popperInstance1 = Popper.createPopper(mark1, tooltip1, {
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  function show1() {
    // Make the tooltip1 visible
    tooltip1.setAttribute('data-show', '');

    // Enable the event listeners
    popperInstance1.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    // Update its position
    popperInstance1.update();
  }

  function hide1() {
    // Hide the tooltip1
    tooltip1.removeAttribute('data-show');

    // Disable the event listeners
    popperInstance1.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  }

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  showEvents.forEach((event) => {
    mark1.addEventListener(event, show1);
  });

  hideEvents.forEach((event) => {
    mark1.addEventListener(event, hide1);
  });

  // Tooltip2
  const mark2 = document.querySelector('#mark2');
  const tooltip2 = document.querySelector('#tooltip2');


  const popperInstance2 = Popper.createPopper(mark2, tooltip2, {
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  function show2() {
    // Make the tooltip2 visible
    tooltip2.setAttribute('data-show', '');

    // Enable the event listeners
    popperInstance2.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    // Update its position
    popperInstance2.update();
  }

  function hide2() {
    // Hide the tooltip2
    tooltip2.removeAttribute('data-show');

    // Disable the event listeners
    popperInstance2.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  }

  showEvents.forEach((event) => {
    mark2.addEventListener(event, show2);
  });

  hideEvents.forEach((event) => {
    mark2.addEventListener(event, hide2);
  });

  // Tooltip3
  const mark3 = document.querySelector('#mark3');
  const tooltip3 = document.querySelector('#tooltip3');

  const popperInstance3 = Popper.createPopper(mark3, tooltip3, {
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  function show3() {
    // Make the tooltip3 visible
    tooltip3.setAttribute('data-show', '');

    // Enable the event listeners
    popperInstance3.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));

    // Update its position
    popperInstance3.update();
  }

  function hide3() {
    // Hide the tooltip3
    tooltip3.removeAttribute('data-show');

    // Disable the event listeners
    popperInstance3.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }));
  }

  showEvents.forEach((event) => {
    mark3.addEventListener(event, show3);
  });

  hideEvents.forEach((event) => {
    mark3.addEventListener(event, hide3);
  });

  // Active state for tooltip
  document.querySelectorAll(".projects__mark").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      document.querySelectorAll(".projects__mark").forEach(el => {
        if (el != btn) {
          el.classList.remove("projects__mark_active");
        }
      });
      if (mediaQuery1024.matches) {
        btn.classList.toggle("projects__mark_active");
      }
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".projects__mark")) {
      document.querySelectorAll(".projects__mark").forEach(el => {
        el.classList.remove("projects__mark_active");
      })
    }
  })

  // Accordion
  $(".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    icons: null,
    active: 0,
    header: ".accordion__item-heading",
  });

  // Validator form and send mail
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  const validation = new JustValidate(
    '.contacts__form',
    {
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: '#D11616',
      },
      position: 'top',
    },
  );

  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваше имя',
      },
      {
        rule: 'customRegexp',
        value: /^[-a-zA-Z\u0410-\u044F`]+$/,
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Не менее 2 символов',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Не более 30 символов',
      },
    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш телефон',
      },
      {
        validator: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
        errorMessage: 'Недопустимый формат',
      },
    ])
    .onSuccess((event) => {
      console.log('Валидация прошла успешно!', event);

      let formData = new FormData(event.target);
  
      console.log(...formData);
  
      let xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
            alert("Форма отправлена!");
          }
        }
      }
  
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
  
      event.target.reset();
    });


  // Yandex map
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75846806898367,37.60108849999989],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
    }, {
      geolocationControlFloat: 'left',
      zoomControlSize: 'small'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Леонтьевский переулок, дом 5/1'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-point.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -10]
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
  }

});





