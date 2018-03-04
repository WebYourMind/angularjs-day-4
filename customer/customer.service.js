(function(){

angular.module('app.customer')
.factory('CustomerFactory', CustomerFactory);

function CustomerFactory($log, $http, $q) {
     var self = this;
     self.customers = [{
            "id": 0,
            "first_name": "Diego",
            "last_name": "Granito",
            "birth_date": new Date(1974, 4, 19),
            "iban": "IT60X0542811101000000432122",
            "credit_card_no": 4319333322233333,
            "age": 36
        },
        {
            "id": 1,
            "first_name": "Bugs",
            "last_name": "Bunny",
            "birth_date": new Date(1974, 0, 19),
            "iban": "IT60X0454511101000000432122",
            "credit_card_no": 4319333322233333,
             "age": 16
        },
        {
            "id": 2,
            "first_name": "Alex",
            "last_name": "Test",
            "birth_date": new Date(1974, 4, 19),
            "iban": "IT60X0454511101000000432121",
            "credit_card_no": 4319333322233333,
             "age": 36
        }];

         self.maxCustomerID = 2;

    return {
        
        getCustomers: function() {
            console.time('getCustomers');
            return $http.get('/api/getCustomers')
                .then(function(response) {
                    console.log(response);
                    self.customers = response.data;
                    console.timeEnd('getCustomers');
                    return $q.resolve(response.data);
                })
        },
        addNewCustomer: function(customer) {
            customer.id = self.maxCustomerID + 1;
            var record = angular.copy(customer) ;
            self.customers.push(record);
            self.maxCustomerId = customer.id;
            $log.log('customers: ', self.customers);
            return self.customers;
        },

        updateCustomer: function(customer) {
            //stub
        },

        deleteCustomer: function(customer) {

            return $q(function(resolve, reject) {
                 self.customers = self.customers.filter(function(obj) {
                 $log.log('obj, customer', obj.id, customer.id);                 
                 return obj.id !== customer.id;
             });
             var result = 'success';
             if (result ==='success') {
                resolve('User Deleted Successfully');
             } else {
                 reject('An error occurred');
             }
               
            });
            // stub
        }

    }

}
})();