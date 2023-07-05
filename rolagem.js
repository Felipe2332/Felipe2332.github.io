

window.addEventListener('scroll',function()
{
    var navbar = document.querySelector('.cabecalho');
    var navLinks = document.querySelectorAll('.texto_cabecalho');

    if (window.scrollY > 0) 
    {
        navbar.style.padding = '5px';
        navLinks.forEach(function(link) {
            link.style.fontSize = '16px';
            navbar.classList.add('noBorder')
            //navbar.classList.add('noBackground')
        });
    }
    else
    {
        navbar.style.padding = '10px';
        navLinks.forEach(function(link) {
            link.style.fontSize = '30px';
            navbar.classList.remove('noBorder')
            //navbar.classList.remove('noBackground')
        });
    }
});


