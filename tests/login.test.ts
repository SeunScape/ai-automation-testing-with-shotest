import { shortest } from "@antiwork/shortest";


shortest("Login with incorrect credentials and show error", {
  username: "invalid_user", 
  password: "wrong_password",
  expect: "Username and password do not match"
});

shortest('Login to the application with valid credentials', {
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_PASSWORD,
});


shortest("Verify login form validation when fields are empty");