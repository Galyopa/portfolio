$(function () {
  
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  $('.nav__btn').on('click', function () {
    $('.nav__list').toggleClass('active');
    $(this).toggleClass('active');
    $('.header__content').toggleClass('active');
  });

  $('.nav__link').on('click', function(){
    $('.nav__btn').removeClass('active');
    $('.nav__list').removeClass('active');
    $('.header__content').removeClass('active');
  })

  $(".nav, .header__content, .footer").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 90) {
      $(".nav").addClass("fix");
    } else {
      $(".nav").removeClass("fix");
    }
  });

  var mixer = mixitup('.portfolio__gallery');
});