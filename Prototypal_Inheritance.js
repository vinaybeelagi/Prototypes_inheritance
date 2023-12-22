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

//  task-Working with prototype

let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
   console.log( rabbit.jumps ); // ? (1)
  
  delete rabbit.jumps;
  
   console.log( rabbit.jumps ); // ? (2)
  
  delete animal.jumps;
  
   console.log( rabbit.jumps ); 

//    task-Searching algorithm
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
   console.log( pockets.pen ); // 3
   console.log( bed.glasses ); // 1
   console.log( table.money );// undefined
   console.log( bed.money );// undefined


