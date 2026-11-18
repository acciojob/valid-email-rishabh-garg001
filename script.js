function validEmail(str) {
  let pattern = /^[\w.-]+@[\w-]+(\.[\w-]+)+$/;

  return pattern.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));