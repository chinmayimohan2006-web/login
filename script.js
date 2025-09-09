function signup() {
  let user = document.getElementById('newUser').value;
  let pass = document.getElementById('newPass').value;
  localStorage.setItem(user, pass);
  alert('User signed up!');
}

function login() {
  let user = document.getElementById('username').value;
  let pass = document.getElementById('password').value;
  let storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    alert('Login successful!');
  } else {
    alert('Invalid credentials!');
  }
}
