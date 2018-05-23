(function () {

  /* State Transitions */
  angular.module('app').run(['$transitions', function ($transitions) {
    $transitions
    .onBefore({}, function(transition) {
      var from = transition.$from();
      var to = transition.$to();
      console.log('onBefore from [%s] to [%s]', from.name, to.name);
    }); 
    $transitions
    .onStart({}, function(transition) {
      var from = transition.$from();
      var to = transition.$to();
      console.log('onStart from [%s] to [%s]', from.name, to.name);
    });  
    $transitions
    .onFinish({}, function(transition) {
      var from = transition.$from();
      var to = transition.$to();
      console.log('onFinish from [%s] to [%s]', from.name, to.name);
    });            
    $transitions
    .onSuccess({}, function(transition) {
      var from = transition.$from();
      var to = transition.$to();
      console.log('onSuccess from [%s] to [%s]', from.name, to.name);
    });   
    $transitions
    .onExit({}, function(transition) {
      var from = transition.$from();
      var to = transition.$to();
      console.log('onExit from [%s] to [%s]', from.name, to.name);
    });            
  }]);

})();