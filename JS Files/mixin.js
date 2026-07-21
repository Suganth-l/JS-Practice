const flyMixin = {
    fly() {
        console.log("Flying..");
    }
};

const swimMixin = {
    swim() {
        console.log("Swimming..");
    }
};

class Duck { }
//Mixins
Object.assign(Duck.prototype, flyMixin, swimMixin);
const duck = new Duck();
duck.fly();
duck.swim();


