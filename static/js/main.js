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
        console.log(str)
        $('<span class="code-type-flag">' + str + '</span>').prependTo($(this))
    })

    // Image zoom.
    // ---------------------------------
    $('img').each(function(idx, ele) {
        var modal = document.getElementById('img-modal');
        var imgWrapper = document.getElementById('img-wrapper');

        ele.onclick = function () {
            modal.style.display = "block";
            imgWrapper.src = ele.src;
        }

        // Get the <span> element that closes the modal
        var closeBtn = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    })

    var toc = document.getElementById('table-of-contents');
    if (toc != null) {
        document.getElementById('toc-wrapper').appendChild(toc);
    }

    window.onscroll = function() {stickNavBar()};

    var navBar = document.getElementById('top-nav');
    var navWrapper = document.getElementById('nav-wrapper');
    var navTitleWrapper = document.getElementById('nav-title-wrapper');
    var navPhoto = document.getElementById('photo-entry');
    var navAbout = document.getElementById('about-entry');
    var preamble = document.getElementById('preamble');
    var sticky = navBar.offsetTop;

    function stickNavBar() {
        if (window.pageYOffset >= sticky) {
            navBar.classList.add("sticky");
            navWrapper.classList.add("sticky");
            navTitleWrapper.classList.add("sticky");
            navPhoto.classList.add("sticky");
            navAbout.classList.add("sticky");
            preamble.classList.add("sticky");
        } else {
            navBar.classList.remove("sticky");
            navWrapper.classList.remove("sticky");
            navTitleWrapper.classList.remove("sticky");
            navPhoto.classList.remove("sticky");
            navAbout.classList.remove("sticky");
            preamble.classList.remove("sticky");
        }
    }
})

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

