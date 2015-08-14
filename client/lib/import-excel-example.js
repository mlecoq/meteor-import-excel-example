var fs = Npm.require('fs');
var path = Npm.require('path');
var basepath = path.resolve('.').split('.meteor')[0];
  


Template.import.events({
    'submit form': function (event,template) {

      event.preventDefault()
      
      console.log(event.target.uploadFile.value)

      return false
    }
});

