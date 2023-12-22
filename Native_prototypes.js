// task -Add method "f.defer(ms)" to functions
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log("Hello!");
  }
  
  f.defer(1000); //  "Hello!" (after 1 sec)
