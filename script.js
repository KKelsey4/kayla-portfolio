// jquery for navigation plugin start

$(document).ready(function(){
    var secondaryNav = $('.cd-secondary-nav'),
        secondaryNavTopPosition = secondaryNav.offset().top,
        contentSections = $('.cd-section');

    $(window).on('scroll', function(){
        if($(window).scrollTop() > secondaryNavTopPosition ) {
            secondaryNav.addClass('is-fixed');
            setTimeout(function() {
                secondaryNav.addClass('animate-children');
            }, 50);
        } else {
            secondaryNav.removeClass('is-fixed');
            setTimeout(function() {
                secondaryNav.removeClass('animate-children');
            }, 50);
        }

        updateSecondaryNavigation();
        
    });


    // modifying the plugin to highlt menu item when i am on thayt section start

    $(document).ready(function() {
        // Hover state
        $('.cd-secondary-nav ul li a').hover(
            function() {
                $(this).css('color', 'white');
            }, function() {
                if (!$(this).hasClass('active')) {
                    $(this).css('color', ''); // Reset to default color if not active
                }
            }
        );
    
        // Initial check for active state on page load
        $('.cd-secondary-nav ul li a.active').css('color', 'white');
    
        // Monitor for changes in the active class (using MutationObserver or similar if needed)
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    if ($(mutation.target).hasClass('active')) {
                        $(mutation.target).css('color', 'white');
                    } else {
                        $(mutation.target).css('color', '');
                    }
                }
            });
        });
    
        // Apply the observer to each link
        $('.cd-secondary-nav ul li a').each(function() {
            observer.observe(this, {
                attributes: true // Monitor attribute changes
            });
        });
    });

    // modifying the plugin to highlt menu item when i am on thayt section start

    function updateSecondaryNavigation() {
        contentSections.each(function(){
            var actual = $(this),
                actualHeight = actual.height(),
                topSection = actual.offset().top - secondaryNav.height(),
                bottomSection = topSection + actualHeight;

            var id = actual.attr('id'),
                navAnchor = $('nav a[href="#' + id + '"]');

            if ($(window).scrollTop() >= topSection && $(window).scrollTop() <= bottomSection) {
                navAnchor.addClass('active');
            } else {
                navAnchor.removeClass('active');
            }
        });
    }

    $('.cd-secondary-nav-trigger').on('click', function(event){
        event.preventDefault();
        $(this).next('nav').toggleClass('is-visible');
    });
});

// jquery for navigation plugin end



// // script to intialize the flickty slider and also sets the options for the slider 
// $(document).ready(function(){
//     console.log("Document is ready"); 
//     $('.carousel').flickity({
//         // options for the slider 
//         cellAlign: 'left',
//         contain: true,
//         autoPlay: false,
//         groupCells: 2,
//         wrapAround: true
//     });
// });

$(document).ready(function(){
    console.log("Document is ready");

    // Function to initialize Flickity with responsive options
    function initializeFlickity() {
        var groupCellsValue = ($(window).width() <= 768) ? false : 2;

        $('.carousel').flickity({
            // options for the slider 
            cellAlign: 'left',
            contain: true,
            autoPlay: false,
            groupCells: groupCellsValue,
            wrapAround: true
        });
    }

    // Initial Flickity initialization
    initializeFlickity();

    // Update Flickity options on window resize
    $(window).resize(function() {
        var flkty = $('.carousel').data('flickity');
        var newGroupCellsValue = ($(window).width() <= 768) ? false : 2;

        if (flkty.options.groupCells !== newGroupCellsValue) {
            flkty.options.groupCells = newGroupCellsValue;
            flkty.reloadCells();
        }
    });
});
// script to intialize the flickty slider and also sets the options for the slider




// jquery for the service cards to add the roating animation start
$(document).ready(function() {
    $("#cards-conatiner .card").hover(
        function() {
            $(this).css({
                transform: 'scale(1.1) rotate(5deg)',
                backgroundColor: 'orange' // Change background color to orange on hover
            });
        },
        function() {
            $(this).css({
                transform: 'scale(1) rotate(0deg)',
                backgroundColor: '#ffffff'
            });
        }
    );
});
// jquery for the service cards to add the roating animation end




// contact form vlidation

$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Validate First Name
        if ($('#firstName').val().trim() === '') {
            $('#firstNameError').text('First Name is required.');
            isValid = false;
        } else {
            $('#firstNameError').text('');
        }

        // Validate Last Name
        if ($('#lastName').val().trim() === '') {
            $('#lastNameError').text('Last Name is required.');
            isValid = false;
        } else {
            $('#lastNameError').text('');
        }

        // Validate Cell Number
        const cellNumber = $('#cellNumber').val().trim();
        const cellNumberPattern = /^\d{10}$/;
        if (!cellNumberPattern.test(cellNumber)) {
            $('#cellNumberError').text('Cell Number must be exactly 10 digits.');
            isValid = false;
        } else {
            $('#cellNumberError').text('');
        }

        // Validate Email
        const email = $('#email').val().trim();
        if (email === '' || !email.includes('@')) {
            $('#emailError').text('Valid Email is required.');
            isValid = false;
        } else {
            $('#emailError').text('');
        }

        // Validate Checkboxes
        if (!$('#collab').is(':checked') && !$('#buy').is(':checked')) {
            $('#optionsError').text('Please select at least one option.');
            isValid = false;
        } else {
            $('#optionsError').text('');
        }

        if (isValid) {
            alert('Form submitted successfully!');
        }
    });
});







