function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
// Solution 1:  Iterate through the array and call greeter for each element
for (const name of user) {
  console.log(greeter(name));
}

// Solution 2: Concatenate array elements into a single string before calling the function
let fullName = user.join(" ");
console.log(greeter(fullName));

// Solution 3: Modify the function signature to accept an array of strings
function greeterArray(persons: string[]) {
  return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));