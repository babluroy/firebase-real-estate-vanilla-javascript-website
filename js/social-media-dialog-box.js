window.fbAsyncInit = function() {
    FB.init({
        appId: '1205588226531013',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v10.0'
    });
};

function fb() {
    FB.ui({
        method: 'feed',
        link: 'https://squarenrent.com/'
    }, function(response) {});
}