jQuery(document).ready(function() {
    jQuery('.advantages__item').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
       });
    jQuery('.services__item-pic').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 300
       });
    jQuery('.services__item-text').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 300
       });
    jQuery('.about__pic').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flip',
        offset: 300
       });
    jQuery('.about__article').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 300
       });
});
