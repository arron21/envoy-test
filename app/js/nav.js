nav = (function(){
    var body = document.querySelector('body');
    var mobileNavBtn = document.querySelector('.mobile-nav-btn');
    var closeMobileNavBtn = document.querySelector('.close');
    var mobileNav = document.querySelector('.mobile-nav');

    function toggleMobileNav(toggle) {
        if(toggle == 1){
            mobileNav.classList.add('mobile-on');
            body.style.overflowY = "hidden";
        }
        else {
            mobileNav.classList.remove('mobile-on');
            body.style.overflowY = "scroll";

        }
    }

    mobileNavBtn.addEventListener('click', function(ev) {
        toggleMobileNav(1);
    });
    closeMobileNavBtn.addEventListener('click', function(ev) {
        toggleMobileNav(0);
    });

})();