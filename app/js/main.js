

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });

  const swiperPrev = document.getElementById('swiperPrev');
  const swiperNext = document.getElementById('swiperNext');

  swiperPrev.addEventListener('click', () => {
    mySwiper.slidePrev();
  });
  swiperNext.addEventListener('click', () => {
    mySwiper.slideNext();
  });


  const tabs = document.querySelectorAll('.services-invoices__tab'),
    tabsParent = document.querySelector('.services-invoices__tabs'),
    tabsContent = document.querySelectorAll('.services-invoices__content');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabs.forEach(item => {
      item.classList.remove('services-invoices__tab--active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add('services-invoices__tab--active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains('services-invoices__tab')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

$ (function (){
  
  $('.questions__item-title').on('click', function () {
    $('.questions__item').removeClass('questions__item--active');
    $(this).parent().addClass('questions__item--active');
  });

});