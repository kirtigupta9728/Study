// object definition
const personName = {
    firstName: "Taylor",
    lastName: "Jackson",
  };
  
  // function definition
  function greet(wish, message) {
    return `${this.firstName}, ${wish}. ${message}`;
  }
  
  // calling greet() function by passing two arguments
  let result = greet.apply(personName, ["Good morning", "How are you?"]);
  
  console.log(result);
  
  // Output:
  // Taylor, Good morning. How are you?