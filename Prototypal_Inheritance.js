obj1 = {
    name : "vinay",
    pc : "hp"
}

obj2 = {
    name:"harry",
    car:"audi",
    dine() {
        return("at hotel only")
    }
}

obj1.__proto__ = obj2;

console.log(obj1.car);
console.log(obj2);
console.log(obj1.dine());