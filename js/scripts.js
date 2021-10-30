window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body,{
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


var tell;

function tell() {
    tell = setTimeout(alertFunc, 200);
  }
  function alertFunc() {
    alert("Thanks! For visiting");
  };



  var int;

function int() {
    int = setInterval(alertFunct, 2000);
  };
  function alertFunct() {
    alert("Thanks!");
  };


  function enter(){
    let text;
    let person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + " ! <br> Thanks for visiting";
      }
    document.getElementById("demo").innerHTML = text;
    };


        $(document).ready(function(){


            $("#yellow").click(function(){
            $(".sub").addClass("yellow");
            });




            $("#white").click(function(){
                $(".sub").addClass("white");
                });
        });