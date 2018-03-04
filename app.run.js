(function () {

  angular.module('app').run(['$httpBackend', function ($httpBackend) {
    var customers = [{ "id": "7e617013-a789-4be3-86b3-d451aaf18845", "first_name": "Hamilton", "last_name": "Escalero", "birth_date": "10/25/1971", "credit_card": "344061003919575", "iban": "ME87 2896 5417 2304 4031 72", "balance": "58651.14", "currency": "CNY", "credit_card_type": "americanexpress" },
    { "id": "7095d4a2-5f13-4274-896c-ddc768791d5c", "first_name": "Sonny", "last_name": "Patullo", "birth_date": "05/31/1935", "credit_card": "3546272198514150", "iban": "BG62 SNCJ 0533 92KS 5ZOT QL", "balance": "27637.24", "currency": "VND", "credit_card_type": "jcb" },
    { "id": "4a509a38-699f-4012-b2e1-1da21c679ae4", "first_name": "Elmore", "last_name": "Peckham", "birth_date": "01/26/1941", "credit_card": "56022592108394414", "iban": "FR46 8484 4194 06JH FHOD TTKR Y02", "balance": "65439.48", "currency": "PHP", "credit_card_type": "china-unionpay" }
    ];


    $httpBackend.whenGET(/.*/).passThrough();
  }]);

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