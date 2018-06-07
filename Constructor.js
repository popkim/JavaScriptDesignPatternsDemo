function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + ' has done ' + this.miles + ' miles from ' + this.year;
    }
}

var lanniao = new Car("Nissan LANNIAO", 2015, 20000);
var mondeo = new Car("Ford Mondeo", 2017, 5000);

console.log(lanniao.toString());
console.log(mondeo.toString());