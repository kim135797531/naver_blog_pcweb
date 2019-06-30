  chrome.storage.sync.get('isEnabled', function(data) {
    var currentURL = window.location.href;
    if(data.isEnabled && currentURL.includes("m.blog.naver")){
      var newURL = currentURL.replace("m.blog.naver", "blog.naver");
      window.location.href = newURL;
    }
  });
