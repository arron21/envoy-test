carousel = (function(){
    var box = document.querySelector('.carouselbox');
    var next = box.querySelector('.next');
    var prev = box.querySelector('.prev');
    var items = box.querySelectorAll('.content li');
    var dots = box.querySelectorAll('.dots li');
    var counter = 0;
    var amount = items.length;
    var current = items[0];
    var currentDot = dots[0];
    box.classList.add('active');


    //setInterval(function(){
    //    navigate(1);
    //}, 5000);

    function navigate(direction) {
        current.classList.remove('current');
        currentDot.classList.remove('current');
        counter = counter + direction;
        if (direction === -1 &&
            counter < 0) {
            counter = amount - 1;
        }
        if (direction === 1 &&
            !items[counter]) {
            counter = 0;
        }
        current = items[counter];
        currentDot = dots[counter];
        current.classList.add('current');
        currentDot.classList.add('current');
    }
    next.addEventListener('click', function(ev) {
        navigate(1);
    });
    prev.addEventListener('click', function(ev) {
        navigate(-1);
    });
    navigate(0);


    function navigateDot(selectedDot, position) {
        current.classList.remove('current');

        dots.forEach(function(item, index){
            item.classList.remove('current');
        });
        counter = position;
        current = items[counter];

        current.classList.add('current');
        selectedDot.classList.add('current')

    }

    dots.forEach(function(item, index){
        item.addEventListener('click', function(ev) {
            console.log(index);

            navigateDot(item, index);
        });
    });

})();