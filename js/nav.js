// Document ready emulator
domReady(function() {
    /**
     * Event handler for scroll-to-top
     * 
     */
    function runScroll(event) {
        event.preventDefault();
        scrollTo(document.body, 0, 300);
        scrollTo(document.documentElement, 0, 300);
        //scrollTo(window.pageYOffset, 0, 300);
    }

    var scrollme = document.getElementById("scrollTop");
    scrollme.addEventListener("click", runScroll, false);

    /**
     * Scroll to top function
     * 
     */
    function scrollTo(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

    /****************************
     * Nav functions
     *
     *
     */

    //glob vars
    var hamburger = document.getElementById("hamburger");
    var openIcon = document.getElementById("openIcon");
    var closeIcon = document.getElementById("closeIcon");
    var navWrapper = document.getElementById("nav-bg-wrapper");

    //event listeners
    hamburger.addEventListener("click", navDropDown);
    window.addEventListener("scroll", navbarBg);

    /**
     * Click handler for mobile-nav hamburger
     *
     */
    function navDropDown(event) {
        event.preventDefault();
        var menu = document.getElementsByClassName("nav-menu")[0];

        if (menu.id === "menu-up") {
            menu.setAttribute("id", "menu-down");
            navWrapper.className = "bg-blue";
            //IE fallback
            if (document.documentMode) {
                closeIcon.className = "shown";
                openIcon.className = "hidden";
                //all others
            } else {
                hamburger.setAttribute("class", "nav-collapse flipped");
            }

        } else if (menu.id === "menu-down") {
            menu.setAttribute("id", "menu-up");
            //IE fallback
            if (document.documentMode) {
                closeIcon.className = "hidden";
                openIcon.className = "shown";
                //all others
            } else {
                hamburger.setAttribute("class", "nav-collapse");
            }

            if (document.body.scrollTop > 60 || window.pageYOffset > 60 || document.documentElement.scrollTop > 60) {

                //
            } else {
                navWrapper.className = "bg-transparent";
            }
            //openIcon.className = "shown";
            //closeIcon.className = "hidden";
        }
    }

    /**
     * navbar background change on scroll
     * 
     */
    function navbarBg() {
        var menu = document.getElementsByClassName("nav-menu")[0];
        var viewPort = document.getElementsByTagName("header")[0];

        if (menu.id !== "menu-down") {
            if (document.body.scrollTop > 60 || window.pageYOffset > 60 || document.documentElement.scrollTop > 60) {
                navWrapper.className = "bg-blue";
            } else {
                navWrapper.className = "bg-transparent";
            }
        }
    }

    /**
     * Event handler for scroll-to-top
     * 
     */
    function runScroll(event) {
        event.preventDefault();
        scrollTo(document.body, 0, 300);
        scrollTo(document.documentElement, 0, 300);
        //scrollTo(window.pageYOffset, 0, 300);
    }

    var scrollTopBtn = document.getElementById("scrollTop");
    scrollTopBtn.addEventListener("click", runScroll, false);

    /**
     * Scroll to top function
     * 
     */
    function scrollTo(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

});