//getting the ('Safari' <-most specific) version of the browser
var browser = navigator.userAgent;
var regex = /Version\/[6-9]+.[0-9]+/g;
var browser_info = browser.split(' ');
var browser_ver = browser_info[browser_info.length-2];

if (navigator.userAgent.indexOf('Chrome') !== -1 || navigator.userAgent.indexOf('Firefox') !== -1){
    //load style-main for Chrome|Opera|Firefox|Edge
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/style-main.css';

    head.appendChild(link);

}else if ((navigator.userAgent.indexOf('Safari' !== -1) && browser_ver.match(regex)) || navigator.userAgent.indexOf('IE11'!== -1)){
    //load style-saf for Safari browser
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/style-outdated.css';

    head.appendChild(link);
}