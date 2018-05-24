(function () {

    angular.module('app.customer')
        .factory('CustomerFactory', CustomerFactory);

    function CustomerFactory($log, $http, $q) {
        var self = this;
        self.customers = [];

        self.maxCustomerID = 2;

        var getCustomers = function () {
            console.time('getCustomers');
            if (self.customers.length > 0)
                return self.customers;
            else
                return $http.get('/api/getCustomers')
                    .then(function (response) {
                        console.log(response);
                        self.customers = response.data;
                        console.timeEnd('getCustomers');
                        return $q.resolve(response.data);
                    })
        };

        var addNewCustomer = function (customer) {

            var promises = [checkIban(customer.iban), checkCCNo(customer.credit_card)];

            return $q(function(resolve, reject) {
                $q.all(promises)
                    .then(function(){
                        customer.id = self.maxCustomerID + 1;
                        var record = angular.copy(customer);
                        self.customers.push(record);
                        self.maxCustomerId = customer.id;
                        $log.log('customers: ', self.customers);
                        resolve(self.customers);
                    })
                    .catch(function(error) {
                        alert("An error occured: "+error);
                        reject("An error occured: "+error)
                    })
            });
        };

        var deleteCustomer = function (customer) {

            return $q(function (resolve, reject) {
                self.customers = self.customers.filter(function (obj) {
                    $log.log('obj, customer', obj.id, customer.id);
                    return obj.id !== customer.id;
                });
                var result = 'success';
                if (result === 'success') {
                    resolve('User Deleted Successfully');
                } else {
                    reject('An error occurred');
                }

            });
            // stub
        };

        var checkIban = function (iban) {
            return $q(function (resolve, reject) {
                console.log(iban)
                $http.post('/api/checkIban', {data:{'iban': iban}})
                    .then(function (response) {
                        resolve(true);
                    })
                    .catch(function (error) {
                        console.log(error)
                        reject('Iban is not valid');
                    })
            })
        }

        var checkCCNo = function (ccNo) {
            return $q(function (resolve, reject) {
                $http.post('/api/checkCCNo', {data: {'ccNo': ccNo}})
                    .then(function (response) {
                        resolve(true);
                    })
                    .catch(function (error) {
                        console.log(error)
                        reject('ccNo is not valid');
                    })
            })
        }

        return {
            getCustomers: getCustomers,
            addNewCustomer: addNewCustomer,
            updateCustomer: function (customer) {
                //stub
            },
            deleteCustomer: deleteCustomer
        }

    }
})();