new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});

// swiper libray initialization
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 4,
    autoplay : {
        delay : 3000
    },
})