/** Slide Show navigation **/
$(function() {
    //Activates function on click of navigation link
    $('nav a').click(function() {
        //Get the link clicked on
        var $link = $(this).attr('href');
        //Returns the anchor part of URL
        document.location.hash = $link;

        //If a link has a class named active
        if (!$(this).hasClass("active")) {
            //Removes class named active and adds it to the link clicked on
            $("nav a").removeClass("active");
            $(this).addClass("active");
            //Hides current section within slideshow class
            $('.slideshow section').hide();
            //Fades in the section elements with anchor
            $($link).fadeIn();
            return false;
        }
        else {
            return false;
        }
    });
});

/** Typing Functions **/
/*First Slide Function */
$(function(){
    //Options for typed.js
    $(".typed-one").typed({
        //text to display. Backspaces whenever "", is closed and types new sentence
        strings: ["This is the first sentence...", "And the second...", "Click the arrow More Information to find out more about this slide...", "Or click the search icon to continue."],
        typeSpeed: 30,//Fast type speed
        startDelay: 1000,//1 second start delay
        backDelay: 1000,//1 second before backspacing
        cursorChar: " ",//Removes blinking | from typing
        loop: false,//No loop
        contentType: 'html'
    });
});
/*Second Slide Function */
$(function(){
    //Options for typed.js set to variable ready for on click event
    var options = {
        strings: ["Now we are on the second slide...", "The text can be anything you want...", "This is just an example."],
        typeSpeed: 30,
        startDelay: 1000,
        backDelay: 1000,
        cursorChar: " ",
        loop: false,
        contentType: 'html'
    };
    //when navigational link is clicked, run the typed.js options
    $("#next-one").click(function(){
        $(".typed-two").typed(options);
    });
});
/*Third Slide Function */
$(function(){
    //Options for typed.js set to variable ready for on click event
    var options = {
        strings: ["This is the final slide...", "There can be more or less slides...", "And the search icon has disappeared as there are no more slides."],
        typeSpeed: 30,
        startDelay: 1000,
        backDelay: 1000,
        cursorChar: " ",
        loop: false,
        contentType: 'html'
    };
    //when navigational link is clicked, run the typed.js options
    $("#next-two").click(function(){
        $(".typed-three").typed(options);
    });
});

/** More Info Arrow Functions */
/*Arrow on first slide*/
$(".arrow-one").click(function() {
    //When element is clicked, animate to area named by class of content-one
    $('html,body').animate({
            scrollTop: $(".content-one").offset().top},
        'slow');
});
/*Arrow on second slide*/
$(".arrow-two").click(function() {
    //When element is clicked, animate to area named by class of content-one
    $('html,body').animate({
            scrollTop: $(".content-two").offset().top},
        'slow');
});
/*Arrow on third slide*/
$(".arrow-three").click(function() {
    //When element is clicked, animate to area named by class of content-one
    $('html,body').animate({
            scrollTop: $(".content-three").offset().top},
        'slow');
});