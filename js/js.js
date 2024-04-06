 // Posts Dropdown

 $('.posts').mouseenter(function () {
    $('.posts-dropdown').slideDown();
});

$(' .posts-dropdown').mouseleave(function () {
    $('.posts-dropdown').hide();
});

$(document).on('click', function (e) {
    if (!$(e.target).closest('.post').length) {
        $('.posts-dropdown').slideUp();
    }
});

$(window).scroll(function () {
    $('.posts-dropdown').slideUp();
});

$(window).resize(function () {
    $('.posts-dropdown').slideUp();
});

// More Dropdown
$('.more-link').mouseenter(function () {
    $('.more-dropdown').slideDown();
});

$('.more-dropdown').mouseleave(function () {
    $('.more-dropdown').hide();
});

$(document).on('click', function (e) {
    if (!$(e.target).closest('.more-link').length) {
        $('.more-dropdown').slideUp();
    }
});

$(window).scroll(function () {
    $('.more-dropdown').slideUp();
});

$(window).resize(function () {
    $('.more-dropdown').slideUp();
});


// Dropdown Menu

$('.dropdown-menu-btn .fa-bars').click(function(){
    $('.dropdown-main-navbar').slideDown();
    $('.fa-xmark').fadeIn();
    $('.fa-bars').fadeOut();
});

$('.dropdown-menu-btn .fa-xmark').click(function(){
    $('.dropdown-main-navbar').slideUp();
    $('.fa-bars').fadeIn();
    $('.fa-xmark').fadeOut();
});

$(window).resize(function () {
    $('.dropdown-main-navbar').slideUp();
});

$('.dropdown-posts-arrow').click(function(){
    $('.dropdown-posts-dropdown').fadeToggle();
});

$('.dropdown-more-arrow').click(function(){
    $('.dropdown-more-dropdown').fadeToggle();
});
