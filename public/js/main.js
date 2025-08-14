(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var el = document.getElementById('spinner');
            if (el) {
                el.classList.remove('show');
            }
        }, 300); // slight delay for smoother fade-out
    };

    window.addEventListener('load', spinner);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Collect form data
            const user_name = document.getElementById("gname").value;
            const user_email = document.getElementById("gmail").value;
            const user_phone = document.getElementById("cname").value;
            const user_service_requested = document.getElementById("cage").value;
            const user_message = document.getElementById("message").value;

            // Relative API path
            const API_URL = '/send-email';

            try {
                const res = await fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user_name, user_email, user_phone, user_service_requested, user_message })
                });

                const data = await res.json();

                if (data.success) {
                    showTopUpMessage('Your email was sent successfully!');
                } else {
                    showTopUpMessage('There was a problem sending your email. Please try again later.', true);
                }

                console.log('Response from server:', data);
            } catch (error) {
                showTopUpMessage('There was a problem sending your email. Please try again later.', true);
                console.error('Fetch error:', error);
            }

            function showTopUpMessage(message, isError = false) {
                let topUpDiv = document.createElement('div');
                topUpDiv.textContent = message;
                topUpDiv.style.position = 'fixed';
                topUpDiv.style.top = '0';
                topUpDiv.style.left = '50%';
                topUpDiv.style.transform = 'translateX(-50%)';
                topUpDiv.style.background = isError ? '#dc3545' : '#28a745';
                topUpDiv.style.color = '#fff';
                topUpDiv.style.padding = '16px 32px';
                topUpDiv.style.zIndex = '9999';
                topUpDiv.style.fontSize = '1.2rem';
                topUpDiv.style.borderRadius = '0 0 8px 8px';
                document.body.appendChild(topUpDiv);
                setTimeout(() => topUpDiv.remove(), 5000);
            }
        });
    });
});












