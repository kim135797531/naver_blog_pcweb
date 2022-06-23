chrome.storage.sync.get(['isEnabled', 'blog', 'cafe', 'map'], function(data) {
    var currentURL = window.location.href;
    if (data.isEnabled && data.blog && currentURL.includes("m.blog.naver")) {
        var newURL = currentURL;
        if (newURL.includes("PostView.naver")) {
            newURL = newURL.replace("PostView.naver", "PostView.nhn");
        }
        newURL = newURL.replace("m.blog.naver", "blog.naver");
        window.location.replace(newURL);
    }
    if (data.isEnabled && data.cafe && currentURL.includes("m.cafe.naver")) {
        var newURL = currentURL.replace("m.cafe.naver", "cafe.naver");
        window.location.replace(newURL);
    }
    if (data.isEnabled && data.map && currentURL.includes("m.map.naver")) {
        var newURL = currentURL.replace("m.map.naver", "map.naver");
        window.location.replace(newURL);
    }
});