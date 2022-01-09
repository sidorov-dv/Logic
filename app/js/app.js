let mySwiper = new Swiper ('.my-sw', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },

    touchRatio: 1,
    grabCursor: true,
    //slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.my-sw'
    },

    //autoHeight: true,
    slidesPerView: 1, 
    watchOverflow: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 0,
   // loop: true,
   // freeMode: true,

    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    speed: 700,

    observer: true,

    // breakpoints : {
    //     320: {},
    //     480: {},
    //     992: {}

    // },


    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },

    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true
    // },

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadows: true
    // },

    // effect: 'cube',
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // },
});

let swComments = new Swiper ('.sw-comments', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },

    touchRatio: 1,
    grabCursor: true,
    //slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.sw-comments'
    },

    //autoHeight: true,
    slidesPerView: 1, 
    watchOverflow: true,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
   // freeMode: true,

    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    speed: 1000,

    observer: true,

    // breakpoints : {
    //     320: {},
    //     480: {},
    //     992: {}

    // },


    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },

    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true
    // },

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadows: true
    // },

    // effect: 'cube',
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // },
});


let swiperBrands = new Swiper ('.sw-brands', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
    },

    touchRatio: 1,
    grabCursor: true,
    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.sw-brands'
    },

    //autoHeight: true,
    slidesPerView: 5, 
    watchOverflow: true,
    //spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
   // freeMode: true,

    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    speed: 500,

    observer: true,

    breakpoints : {
        300: {
                slidesPerView: 1,
                centeredSlides: false,
            },
        450: {
                slidesPerView: 2,
                centeredSlides: false,
            },
        770: {
                slidesPerView: 4,
                centeredSlides: false,
            }, 
        1000: {
                slidesPerView: 5,
                centeredSlides: true,
            },           
    },


    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },

    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true
    // },

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadows: true
    // },

    // effect: 'cube',
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94
    // },
});


//debugger

function removeClass(btnsArr, className) {
    btnsArr 
        .filter(item => item.classList.contains(className))
        .map(item => item.classList.remove(className));
}

let btnMobMenu = document.querySelector('.btn-menu');
let btnMobClose = document.querySelector('.closebtn');
btnMobMenu.addEventListener('click', openNav);
btnMobClose.addEventListener('click', closeNav);


function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


let linksMenu = document.querySelector('.nav');

linksMenu.addEventListener('click', function(e) {
    if (!e.target.closest('a')) return;
    let link = e.target.closest('a');
    if (link.classList.contains('act')) return;

    let links = Array.from(this.querySelectorAll('a'));

    removeClass(links, 'act');
    link.classList.add('act');
});

let linksMenuMob = document.querySelector('.overlay-content');

linksMenuMob.addEventListener('click', function(e) {
    if (!e.target.closest('a')) return;
    let link = e.target.closest('a');
    if (link.classList.contains('act')) return;

    let links = Array.from(this.querySelectorAll('a'));

    removeClass(links, 'act');
    link.classList.add('act');
});
// document.querySelector('.btn-menu').addEventListener('click', () => {
//     document.querySelector('.mob-menu').classList.toggle('show');
// });

let btnsContainer = document.querySelector('.bookmark');

btnsContainer.addEventListener('click', function(e) {
	if (!e.target.closest('button')) return;
	let btn = e.target.closest('button');
	if (btn.classList.contains('active')) return;

    let btns = Array.from(this.querySelectorAll('button'));

    removeClass(btns, 'active');
    btn.classList.add('active');

    let btnId = btn.id;
    
    let boxs = Array.from(document.querySelectorAll('.description'));
    //removeClass(boxs, 'hide');

    //if (btnId === 'one') return;
     
    if (boxs.filter(box => box.dataset.box !== btnId)) {
        boxs.map(box => box.classList.add('hide'));
    }

    let arrhide = boxs.filter(box => box.dataset.box == btnId);
    arrhide.map(box => box.classList.remove('hide'));
   
});


// let btnsAbLog = document.querySelector('.benefits');

// btnsAbLog.addEventListener('click', function(e) {
//     if (!e.target.closest('button')) return;
//     let btn = e.target.closest('button');
//     if (btn.classList.contains('active')) return;

//     let btns = Array.from(this.querySelectorAll('button'));

//     removeClass(btns, 'active');
//     btn.classList.add('active');
// });


let btnsSk = document.querySelector('.but-cont');

btnsSk.addEventListener('click', function(e) {
	if (!e.target.closest('button')) return;
	let btn = e.target.closest('button');
	if (btn.classList.contains('active')) return;

    let btns = Array.from(this.querySelectorAll('button'));

    removeClass(btns, 'active');
    btn.classList.add('active');

    let btnId = btn.id;
    
    let boxs = Array.from(document.querySelectorAll('.text'));
    let checks = Array.from(document.querySelectorAll('.control'));
    //removeClass(boxs, 'hide');

    //if (btnId === 'one') return;
     
    if (boxs.filter(box => box.dataset.box !== btnId)) {
        boxs.map(box => box.classList.add('hidet'));
    }

    if (checks.filter(box => box.dataset.box !== btnId)) {
        checks.map(box => box.classList.add('hidet'));
    }

    let arrhide = boxs.filter(box => box.dataset.box == btnId);
    arrhide.map(box => box.classList.remove('hidet'));

    let checkshide = checks.filter(box => box.dataset.box == btnId);
    checkshide.map(box => box.classList.remove('hidet'));
   
});

// let btnsSkills = document.querySelector('.our');

// btnsSkills.addEventListener('click', function(e) {
//     if (!e.target.closest('button')) return;
//     let btn = e.target.closest('button');
//     if (btn.classList.contains('active')) return;

//     let btns = Array.from(this.querySelectorAll('button'));

//     removeClass(btns, 'active');
//     btn.classList.add('active');
// });


// let btnsOthServ = document.querySelector('.serv-list');

// btnsOthServ.addEventListener('click', function(e) {
//     if (!e.target.closest('button')) return;
//     let btn = e.target.closest('button');
//     if (btn.classList.contains('active')) return;

//     let btns = Array.from(this.querySelectorAll('button'));

//     removeClass(btns, 'active');
//     btn.classList.add('active');
// });


let btnsBookCont = document.querySelector('.book');

btnsBookCont.addEventListener('click', function(e) {
    if (!e.target.closest('button')) return;
    let btn = e.target.closest('button');
    if (btn.classList.contains('active')) return;

    let btns = Array.from(this.querySelectorAll('button'));

    removeClass(btns, 'active');
    btn.classList.add('active');

    let btnId = btn.id;
    
    let boxs = Array.from(document.querySelectorAll('.context'));
    //removeClass(boxs, 'phide');

    //if (btnId === 'one') return;
     
    if (boxs.filter(box => box.dataset.text !== btnId)) {
        boxs.map(box => box.classList.add('phide'));
    }

    let arrhide = boxs.filter(box => box.dataset.text == btnId);
    arrhide.map(box => box.classList.remove('phide'));
});


let btnsLatPr = document.querySelector('.sel-cont');

btnsLatPr.addEventListener('click', function(e) {
	if (!e.target.closest("button")) return;
	let btn = e.target.closest("button");
	if (btn.classList.contains('active')) return;

    let btns = Array.from(this.querySelectorAll('button'));

    removeClass(btns, 'active');
    btn.classList.add('active');

    let btnId = btn.id;
    
    let boxs = Array.from(document.querySelectorAll('.boxgr'));
    removeClass(boxs, 'hide-img');
    if (btnId === 'Show all') return;

    boxs 
        .filter(box => box.dataset.cont !== btnId)
        .map(box => box.classList.add('hide-img'));
        
});


let activeVideo = document.querySelector('.video-intro video');
let videos = document.querySelectorAll('video');
let playBtnBig = document.querySelector('.play-btn');
let pauseBtnBig = document.querySelector('.pause-btn');
let textVideo = document.querySelector('.video-intro .text-intro');

videos.forEach((vid) => {
	if (vid.played) {
			vid.pause();
			playBtnBig.classList.remove("hidden-btn");
            pauseBtnBig.classList.add("hidden-btn");
			// playBtn.classList.remove("hidden");
    }
});


function videoAct() {
    let playBtnBig = document.querySelector('.play-btn');
    let pauseBtnBig = document.querySelector('.pause-btn');
    let activeVideo = document.querySelector('.video-intro video');
    let textVideo = document.querySelector('.video-intro .text-intro');
    console.log(activeVideo);

    if (activeVideo.paused) {
        activeVideo.play();
       // playBtn.classList.add("hidden");
     //  playBtnBig.style.visibility='hidden'
       playBtnBig.classList.add("hidden-btn");
       pauseBtnBig.classList.remove("hidden-btn");
       textVideo.classList.add("hidden-btn");
       // pauseBtn.classList.remove("hidden");
       console.log(activeVideo);
        // activeVideo.addEventListener('timeupdate', videoProgress);
        // soundBar.addEventListener('change', videoChangeVolume);
    } 
    else if (activeVideo.played) {
        activeVideo.pause();
     //   playBtn.classList.remove("hidden-btn");
      //  playBtnBig.style.visibility='visible'
        playBtnBig.classList.remove("hidden-btn");
        pauseBtnBig.classList.add("hidden-btn");
        textVideo.classList.remove("hidden-btn");
     //   pauseBtn.classList.add("hidden-btn");

    }
    // if (durTime.innerHTML == '00:00') {
    //     durTime.innerHTML = videoTime(activeVideo.duration);
    // }
};

//playBtn.addEventListener('click', videoAct);
pauseBtnBig.addEventListener('click', videoAct);
playBtnBig.addEventListener('click', videoAct);

// let playBtn = document.querySelector('.video-controls .play');
// let pauseBtn = document.querySelector('.video-controls .pause');
// let currTime = document.querySelector('.video-controls .curr-time');
// let durTime = document.querySelector('.video-controls .dur-time');
// let progressBar = document.querySelector('.video-controls .progress-bar');
// let soundBar = document.querySelector('.video-controls .sound-bar');
// let expandBtn = document.querySelector('.video-controls .expand');