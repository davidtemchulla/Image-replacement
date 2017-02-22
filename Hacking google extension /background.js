console.log('hello')

function callback(details){
    var method= details.method;
    var type= details.type;
    var url= details.url;
    console.log(method, type, url);

if (type === 'image') {
    var viewSrc = chrome.extension.getURL('view.jpg');
    return {redirectUrl: viewSrc};
  }
}

var filter= {
    urls: ['<all_urls>']
};

var extraInfo= ['blocking'];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, extraInfo);

