// code
let passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "Bobryisk"
  }
};

let passportMarried2 = structuredClone(passportMarried);
passportMarried.married = true;

console.log(passportMarried2);
console.log(passportMarried);

