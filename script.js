function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUsername = usernameInput.value === "hongbing0419@haha.co";
  const isCorrectPassword = passwordInput.value === "password";

  if (isCorrectUsername && isCorrectPassword) {
    result.innerHTML = "Welcome Ashton!";
  } else if (isCorrectUsername && !isCorrectPassword) {
    result.innerHTML = "Wrong Password!";
  } else {
    result.innerHTML = "Wrong Password/Username";
  }
}