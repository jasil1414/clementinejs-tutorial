'use strict';
(function(){
  var addButton = document.querySelector('.btn-add');
  var deleteButton = document.querySelector('.btn-delete');
  var clickNbr = document.querySelector('#click-nbr');
  var apiUrl = 'http:///localhost:3000/api/clicks';

  function ready (fn){
    if(typeof fn !== 'function'){
      return;
    }

    if(document.readyState === 'complete'){
      return fn();
    }
    document.addEventListener('DOMContentLoaded',fn,false);
  }

  function ajaxRequest(method,url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState ===4 && xhr.status ===200){
        callback(xhr.response);
      }
    };
    xhr.open(method,url,true);
    xhr.send();
  }

  function updateClickCount(data){
    var clicksObject = JSON.parse(data);
    clickNbr.innerHTML = clicksObject.clicks;
  }

  ready(ajaxRequest('GET',apiUrl,updateClickCount));

  addButton.addEventListener('click', function(){
    ajaxRequest('POST',apiUrl,function(){
      ajaxRequest('GET',apiUrl,updateClickCount)
    });
  }, false);

  deleteButton.addEventListener('click',function(){
    ajaxRequest('DELETE',apiUrl,function(){
      ajaxRequest('GET',apiUrl,updateClickCount);
    });
  },false);
})();
