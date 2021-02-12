import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {

  $('#slider-about-us').slick({
    infinite: false,
    speed: 250,
    easing: 'ease',
    slidesToShow: 2,
    slidesToScroll: 1,
    padding: 0,
    arrows: true,
    dots: false,
    prevArrow: $('.about-us__btn-prew'),
    nextArrow: $('.about-us__btn-next'),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          fade: true
        }
      }
    ]
  })
  function findSliderItem() {
    let videoSlider = document.querySelector('#slider-about-us');
    let items = videoSlider.querySelectorAll('.slider__item');
    items.forEach(el => setupVideo(el))
  }

  function setupVideo(video) {
    let prewImg = video.querySelector('.video-prew-img');
    let media = video.querySelector('.video-link');
    let button = video.querySelector('.play-btn');
    let id = parseMediaURL(media);

    button.addEventListener('click', () => {
      let iframe = createIframe(id);
      prewImg.remove();
      button.remove();
      video.classList.add('slider__item--video')
      video.appendChild(iframe);
    });
  }

  function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
  }

  function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('slider__media');

    return iframe;
  }

  function generateURL(id) {
    let query = '?playsinline=1&rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }

  findSliderItem();
  

});
