//! var is function scope
var age = 25; // = is called an assiognment operator
console.log(age);
var name = "Abula Martins Onyemuche";

//? let is limited to the block they are declared
let name_1 = "john";
console.log(name_1);
name_1 = "doe";
console.log(name_1);

//? block scoped
const pie = 3.142;
console.log(pie);
// pie = 3.78;
// console.log(pie);

// let if = "martins"; //! dont do this other reserve keywords are let, var, for, etc
let num1 = "123";
let num2 = 123;
let num = num1 + num2
console.log(num);

// classNames
let itskillscenterOctCohort = ["obinna", "buchi", "fortune", "isreal", "martins", "ridwan","standfirm", "esther", "gabriel", "ngozi", "emmanuel", "sarah", "opeyemi", "mazi", "zion", "pablo", "timilehin"]
const itstuds = itskillscenterOctCohort ? itskillscenterOctCohort.map(st => {
    return "my nickname is " + st.slice(0,4) + '\n';
}) : "";
console.log(itstuds.join(""))