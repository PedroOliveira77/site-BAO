jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { // Ajuste esse valor conforme necessário
            $('.custom-navbar').addClass('navbar-scrolled');
        } else {
            $('.custom-navbar').removeClass('navbar-scrolled');
        }
    });

    let navBtn = $('.nav-link');
    let navHomeBTN = $('#home-menu');


    let sobreSection = $('#sobre-area'); // Corrigido para selecionar pelo ID
    let metodologiaSection = $('#metodologia-area'); // Corrigido para selecionar pelo ID
    let beneficiosSection = $('#beneficios-area'); // Corrigido para selecionar pelo ID
    let produtosSection = $('#produtos-area'); // Corrigido para selecionar pelo ID
    let parceirosSection = $('#parceiros-area'); // Corrigido para selecionar pelo ID
    let homeSection = $('#home-area'); // Corrigido para selecionar pelo ID

    let navbarHeight = $('.custom-navbar').outerHeight(); // Altura da navbar fixa

    let scrollTo = '';

    $(navHomeBTN).click(function () {
        scrollTo = homeSection;

        $('html, body').animate({
            scrollTop: $(scrollTo).offset().top - navbarHeight // Ajuste pela altura da navbar
        }, 100);

    });

    $(navHomeBTN).click(function () {
        $('#sobre-menu').removeClass('active')
        $('#metodologia-menu').removeClass('active')
        $('#beneficios-menu').removeClass('active')
        $('#produtos-menu').removeClass('active')
        $('#parceiros-menu').removeClass('active')

    });

    $(navBtn).click(function () {
        let btnID = $(this).attr('id');

        if (btnID == 'sobre-menu') {
            scrollTo = sobreSection;
        } else if (btnID == 'metodologia-menu') {
            scrollTo = metodologiaSection;
        } else if (btnID == 'beneficios-menu') {
            scrollTo = beneficiosSection;
        } else if (btnID == 'produtos-menu') {
            scrollTo = produtosSection;
        } else if (btnID == 'parceiros-menu') {
            scrollTo = parceirosSection;
        } else {
            scrollTo = sobreSection;
        }

        $('html, body').animate({
            scrollTop: $(scrollTo).offset().top - navbarHeight // Ajuste pela altura da navbar
        }, 100);
    });   



    $(navBtn).click(function () {
        let btnID = $(this).attr('id');
        $('#sobre-menu').removeClass('active')
        $('#metodologia-menu').removeClass('active')
        $('#beneficios-menu').removeClass('active')
        $('#produtos-menu').removeClass('active')
        $('#parceiros-menu').removeClass('active')
        $('#'+btnID).addClass('active');

    });

});