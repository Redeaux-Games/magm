window.onloadTurnstileCallback = function () {
    turnstile.render('#sform', {
        sitekey: '0x4AAAAAAAi8Kp2CLvi1LRFO',
        callback: function(token) {
            console.log(`Challenge Success ${token}`);
        },
    });
};