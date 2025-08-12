(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
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


//Function to handle any form submission ...
document.addEventListener('DOMContentLoaded', function () {
    //Here we getting every single form in our project ...
    const forms = document.querySelectorAll('form');

    //This code will be applied everytime we click on submit in any form into our project ...
    forms.forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Collect form data (customize field names as needed)
            const formData = new FormData(form);
            //const to = formData.get('email') || formData.get('gmail'); // Adjust as per your form
            const subject = 'Thank you for contacting Home Repair!';
            const text = 'We have received your request and will get back to you soon.';
            const html = `<p>We have received your request and will get back to you soon.</p>`;

            const user_name=document.getElementById("gname").value;
            const user_email=document.getElementById("gmail").value;
            const user_phone=document.getElementById("cname").value;
            const user_service_requested=document.getElementById("cage").value;
            const user_message=document.getElementById("message").value;
            

            
            fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_name, user_email, user_phone, user_service_requested, user_message })
            }).then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            }).then(data => {
                if (data.success) {
                    showTopUpMessage('Your email was sent successfully!');
                } else {
                    showTopUpMessage('There was a problem sending your email. Please try again later.', true);
                }
                console.log('Response from server:', data);
            }).catch(error => {
                showTopUpMessage('There was a problem sending your email. Please try again later.', true);
                console.error('There was a problem with the fetch operation:', error);
            });

            function showTopUpMessage(message, isError = false) {
                let topUpDiv = document.createElement('div');
                topUpDiv.textContent = message;
                topUpDiv.style.position = 'fixed';
                topUpDiv.style.top = '0';
                topUpDiv.style.left = '50%';
                topUpDiv.style.transform = 'translateX(-50%)';
                topUpDiv.style.background = isError ? '#dc3545' : '#28a745'; // red for error, green for success
                topUpDiv.style.color = '#fff';
                topUpDiv.style.padding = '16px 32px';
                topUpDiv.style.zIndex = '9999';
                topUpDiv.style.fontSize = '1.2rem';
                topUpDiv.style.borderRadius = '0 0 8px 8px';
                document.body.appendChild(topUpDiv);
                setTimeout(() => {
                    topUpDiv.remove();
                }, 50000);
            }
        });
    });
});














