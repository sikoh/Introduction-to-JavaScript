const myName = "Silvy";
let yourName = "Tony";
// let yourName;

function setName(newName = "unknown") {
  yourName = newName;
}

function printNames() {
  console.log(myName);
  console.log(yourName);
}

// console.log("before set name");
// printNames();

// setName();
// setName("Adam");

// console.log("\nafter set name");
// printNames();

for (let i = 0; i < 100; i++) printNames();
