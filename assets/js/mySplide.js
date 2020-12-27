// Initializing partners casousel
let partnersSplide = new Splide( '.splide', {
    perPage: 2,
    perMove: 1,
    type: 'loop',
    width: '100%',
    pagination: false,
    autoplay: true,
    interval: 9000,
    speed: 500,
    pauseOnHover: false,
    direction: 'ttb',
    heightRatio: .8,
    gap: '2rem',
    start: 1,
    breakpoints: {
      992: {
        perPage: 2,
        heightRatio: 1.2,
      },
      768: {
        gap: '.5rem',
        perPage: 1,
        heightRatio: 1.2,
      },
      459: {
        perPage: 1,
        heightRatio: 1.1,
        interval: 5000,
        speed: 500,
      },
    }, 
  } ).mount();

  