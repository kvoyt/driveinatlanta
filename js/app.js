//Google Tag Manager
var USER_DEVICE = (function () { if (isMobile) { if (isMobile.phone) return "mobile"; if (isMobile.tablet) return "tablet" } return "desktop" })();
window.digitalData = {
    page: {
        attributes: {
            modulesAvailable: "beta",
        },
        category: {
            organization: "LN",
        },
        pageInfo: {
            destinationURL: window.top.location.href,
            domain: "LN_US",
            environment: "production",
            pageName: "LN_US: discovery: Drive - In Concerts",
            pageType: "Splash Page",
            platform: "ln-react",
            publisher: "livenation",
            publisherDivision: "US",
            referringURL: document.referrer,
            sysEnv: USER_DEVICE,
        },
    },
    pageInstanceID: "LN_US: Drive-In Concerts",
};

(function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-K4QMLG');


//Digital Data installation and dataLayer push for pageview
document.addEventListener('DOMContentLoaded', function () {
    dataLayer.push({ event: 'virtualPageView' });
}, false);