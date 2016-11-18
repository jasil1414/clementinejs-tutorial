'use strict';
(function(){
  var profileId = document.querySelector('#profile-id')||null;
  var profileUsername = document.querySelector('#profile-username')||null;
  var profileRepos = document.querySelector('#profile-repos')||null;
  var displayName = document.querySelector('#display-name')||null;
  var apiUrl = apiUrl + '/api/:id';

  function updateHtmlElement (data,element, userProperty){
    element.innerHTML = data[userProperty];
  }

  ajaxFunction.ready(ajaxFunction.ajaxRequest('GET', apiUrl, function(data){
    var userObject = JSON.parse(data);
    console.log(data);

      updateHtmlElement(userObject, displayName, 'displayName');

      if (profileId !== null) {
         updateHtmlElement(userObject, profileId, 'id');
      }

      if (profileUsername !== null) {
         updateHtmlElement(userObject, profileUsername, 'username');
      }

      if (profileRepos !== null) {
         updateHtmlElement(userObject, profileRepos, 'publicRepos');
      }
  }))

})();
