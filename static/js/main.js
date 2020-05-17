'use strict'

// Init variables.
// ------------------------------------------------------------------
let ISHOME = false,
    ISPC = false,
    ISMB = false,
    isZoom = false,
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
        $(this).click(function() {

            if(!isZoom) {
                $('html').append(
                    `
                    <div class='img-wrapper animated pulse faster'>
                        <img class='img-zoom' src=${ele.src} />
                    </div>
                    `
                )

                $('.img-wrapper').click(function() {
                    $('.img-wrapper').remove()
                    isZoom = false
                })

                isZoom = true
            }
        })
    })
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
