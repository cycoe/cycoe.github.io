'use strict'

// Init variables.
// ------------------------------------------------------------------
let ISHOME = false,
    ISPC = false,
    ISMB = false,
    isCard = false,
    cent = '',
    topBtn = '';

// Diff PC and Mobile.
// ---------------------------------
if(browserRedirect() == 'PC') {
    ISPC = true;
    console.log("Is PC")
} else {
    ISMB = true;
}

// Some customizations after DOM loading.
$(document).ready(() => {
    // Show type of code block.
    // ---------------------------------
    $('.src').each(function() {
        var str = $(this)[0].className.split(' src-')[1];
        $('<span class="code-type-flag">' + str + '</span>').prependTo($(this));
    });

    // Image zoom.
    // ---------------------------------
    $('img').each(function(idx, ele) {
        var modal = document.getElementById('img-modal');
        var imgWrapper = document.getElementById('img-wrapper');

        ele.onclick = function () {
            modal.style.display = "block";
            imgWrapper.src = ele.src;
        };

        // Get the <span> element that closes the modal
        var closeBtn = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    });

    // Move the table-of-contents to the toc-wrapper.
    // ---------------------------------
    var toc = document.getElementById('table-of-contents');
    if (toc != null) {
        document.getElementById('toc-wrapper').appendChild(toc);
    }

    // Listen to scroll action, the handle with the navigation bar.
    // ---------------------------------
    // Get the offset of navigation bar
    var navBar = document.getElementById('top-nav');
    var navBarOffset = navBar.offsetTop;
    // Get the offset of content
    var content = document.getElementById('content');
    var contentOffset = content.offsetTop;

    // Elements to add to sticky class
    var eleToSticky = ['nav-wrapper',  'preamble'];
    // Elements to add to title-action class
    var eleToTitle = ['nav-title-wrapper', 'photo-entry', 'about-entry'];

    function handleNavBar() {
        if (window.pageYOffset >= navBarOffset) {
            navBar.classList.add("sticky");
            eleToSticky.map(function(ele) {
                document.getElementById(ele).classList.add('sticky');
            });
        } else {
            navBar.classList.remove("sticky");
            eleToSticky.map(function(ele) {
                document.getElementById(ele).classList.remove('sticky');
            });
        }
        if (window.pageYOffset >= contentOffset) {
            eleToTitle.map(function(ele) {
                document.getElementById(ele).classList.add('title-action');
            });
        } else {
            eleToTitle.map(function(ele) {
                document.getElementById(ele).classList.remove('title-action');
            });
        }
    }
    
    handleNavBar();
    window.onscroll = function() {handleNavBar();};
});

function browserRedirect() {
    let sUserAgent = navigator.userAgent.toLowerCase();
    let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    let bIsMidp = sUserAgent.match(/midp/i) == "midp";
    let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    let bIsAndroid = sUserAgent.match(/android/i) == "android";
    let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        return 'MB';
    } else {
        return 'PC';
    }
}

