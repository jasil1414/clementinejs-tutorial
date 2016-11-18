'use strict';
(function(){
  var addButton = document.querySelector('.btn-add');
  var deleteButton = document.querySelector('.btn-delete');
  var clickNbr = document.querySelector('#click-nbr');
  var apiUrl = appUrl + '/api/:id/clicks';


  function updateClickCount(data){
    var clicksObject = JSON.parse(data);
    console.log(clicksObject);
    clickNbr.innerHTML = clicksObject.clicks;
  }

  ajaxFunction.ready(ajaxFunction.ajaxRequest('GET',apiUrl,updateClickCount));

  addButton.addEventListener('click', function(){
    ajaxFunction.ajaxRequest('POST',apiUrl,function(){
      ajaxFunction.ajaxRequest('GET',apiUrl,updateClickCount)
    });
  }, false);

  deleteButton.addEventListener('click',function(){
    ajaxFunction.ajaxRequest('DELETE',apiUrl,function(){
      ajaxFunction.ajaxRequest('GET',apiUrl,updateClickCount);
    });
  },false);
})();
