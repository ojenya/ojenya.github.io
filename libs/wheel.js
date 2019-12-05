window.onload = () => {

    let intro = new WheelIndicator({
        elem: document.querySelector('.intro'),
        callback: e => {
            addClass(intro.getOption('elem'))
            removeClass(about.getOption('elem'))
            $('body,html').animate({ scrollTop: document.body.clientHeight }, 2500);

        },
        preventMouse: false
    })

    let about = new WheelIndicator({
        elem: document.querySelector('.about'),
        callback: e => {
            addClass(about.getOption('elem'))
            removeClass(intro.getOption('elem'))
            $('html,body').animate({ scrollTop: 0 }, 400);
        },
        preventMouse: false
    })

}

function addClass(element) {
    if (!element.className.includes('active')) {
        element.className += ' ' + 'active'
    }
}

function removeClass(element) {
    if (element.className.includes('active')) {
        element.className = element.className.substring(0, element.className.length - 7) // className - ' active'
    }
}

/**
 * 
 * Docs
 * 
 * https://github.com/Promo/wheel-indicator
 * 
 */