// const dog = {
//     name: "doggie",
//     legs: 3,
//     speaks: "bow"
// }

// function printStr(animal) {
//     console.log(animal["name"] );
// }

// printStr(dog)

// class Animal {
//   constructor(name, leg, speak) {
//     this.name = name;
//     this.leg = leg;
//     this.speak = speak;
//   }
//   names(){
//     console.log(this.name);
//   }
//   legs(){
//     console.log("it has "+this. leg + "legs");
//   }
//   speaks(){
//     console.log("It speaks " + this.speak);
//   }

  
// }
// let dog = new Animal("dog", 4, "bhow");
// dog.names();
// dog.legs()
// dog.speaks();

// function dateMethods() {
//     const currentDate = new Date();
//     console.log("Current Date:", currentDate);
  
//     // Getting various components of the date
//     console.log("Date:", currentDate.getDate());
//     console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
//     console.log("Year:", currentDate.getFullYear());
//     console.log("Hours:", currentDate.getHours());
//     console.log("Minutes:", currentDate.getMinutes());
//     console.log("Seconds:", currentDate.getSeconds());
  
//     // Setting components of the date
//     currentDate.setFullYear(2022);
//     console.log("After setFullYear:", currentDate);
  
//     currentDate.setMonth(5); // Setting month to June (zero-indexed)
//     console.log("After setMonth:", currentDate);
  
//     // Getting and setting time in milliseconds since 1970
//     console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
//     const newDate = new Date(2023, 8, 15); // Creating a new date
//     console.log("New Date:", newDate);
//   }
  
//   // Example Usage for Date Methods
//   dateMethods();  

// function currTime(){
//     console.log(new Date().getTime());
// }
// setInterval(currTime, 1000);


// const user = '{"name": "vijay", "age": "32", "gender": "male" }'
// // json parse
// const user1 = JSON.parse(user)
// console.log(user1);
// // Stringify
// const user3 = JSON.stringify(user1);
// console.log(user3);
// console.log(Math.max(23,12));
// console.log(Math.min(23,12));
// console.log(Math.floor(23.2));
// console.log(Math.ceil(23));

// Object Methods Explanation
// function objectMethods(obj) {
//     // console.log("Original Object:", obj);
  
//     let keys = Object.keys(obj);
//     // console.log("After Object.keys():", keys);
  
//     let values = Object.values(obj);
//     // console.log("After Object.values():", values);
  
//     let entries = Object.entries(obj);
//     // console.log("After Object.entries():", entries);
  
//     let hasProp = obj.hasOwnProperty("property");
//     // console.log("After hasOwnProperty():", hasProp);
  
//     let newObj = Object.assign({}, obj, { newProperty: "newValue" });
//     // console.log("After Object.assign():", newObj);
//   }
//   // Example Usage for Object Methods
//   const sampleObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//   };
  
//   objectMethods(sampleObject);
  
// const obj = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//   };

//   let newObj = Object.assign({}, obj, {new: "prop"});
//   console.log(newObj);


// 1.4 | Loops, Functions and callbacks

let ans = 10;

for(let i = 1; i <= 10; i++){
    ans = ans + i;
} 

console.log(ans);