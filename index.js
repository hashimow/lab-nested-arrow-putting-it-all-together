function createLoginTracker(userInfo) {

    // start the login attempts at 0
    let attemptCount = 0;

    // this will check the password each time
    const tryLogin = (passwordAttempt) => {

        // increase attempts
        attemptCount = attemptCount + 1;

        // if attempts are more than 3, lock account
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // check if the password is correct
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            return "Attempt " + attemptCount + ": Login failed";
        }
    };

    // return the inner function
    return tryLogin;
}
const login = createLoginTracker({
    username: "user1",
    password: "password123"
});

console.log(login("abc"));        // Attempt 1: Login failed
console.log(login("hello"));      // Attempt 2: Login failed
console.log(login("1234"));       // Attempt 3: Login failed
console.log(login("password123")); // Account locked due to too many failed login attempts
 







































module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};