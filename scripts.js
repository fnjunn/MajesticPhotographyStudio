$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
    });
});
