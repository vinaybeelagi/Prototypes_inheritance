// obj1 = {
//     name : "vinay",
//     pc : "hp"
// }

// obj2 = {
//     name:"harry",
//     car:"audi",
//     dine() {
//         return("at hotel only")
//     }
// }

// obj1.__proto__ = obj2;

// console.log(obj1.car);
// console.log(obj2);
// console.log(obj1.dine());

// assignment is handled by a setter function(admin.fullName)
let user = {
    name: "messi",
    surName: "arsenal",
  
    set fullName(value) {
      [this.name, this.surName] = value.split(" ");
    },
    get fullName() {
      return `${this.name} ${this.surName}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };  
  
  console.log(admin.fullName);
  admin.fullName = "vin beelagi";
  console.log(admin.fullName);
  console.log(user.fullName);  


