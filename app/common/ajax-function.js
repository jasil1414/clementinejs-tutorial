var appUrl = window.location.origin;
console.log(appUrl);
var ajaxFunction= {
  ready: function ready (fn){
    if(typeof fn !== 'function'){
      return;
    }

    if(document.readyState === 'complete'){
      return fn();
    }
    document.addEventListener('DOMContentLoaded',fn,false);
  }
  ajaxRequest : function ajaxRequest(method,url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState ===4 && xhr.status ===200){
        console.log('xhr'+xhr.response);
        callback(xhr.response);
      }
    };
    xhr.open(method,url,true);
    xhr.send();
  }
};
