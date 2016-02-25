var Customer = (function () {
    function Customer(name, id) {
        this.name = name;
        this.idNumber = id;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getId = function () {
        return this.idNumber;
    };
    return Customer;
}());

//# sourceMappingURL=customer.js.map
