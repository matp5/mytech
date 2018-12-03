(function () {
    let header = document.getElementById('header');
    let menuToggle = document.getElementById('toggle');

    menuToggle.addEventListener('click', function () {
        if (header.className == 'open') {
            header.className = '';
        } else {
            header.className = 'open';

        }
    })

})();