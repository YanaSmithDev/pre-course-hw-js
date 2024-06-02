// code
let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};

let changeCity = structuredClone(passportWithAddress);

changeCity.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);

console.log(changeCity.address.city);

