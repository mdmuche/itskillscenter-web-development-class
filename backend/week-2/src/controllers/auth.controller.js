const authController = () => {
  const registerUser = (req, res, next) => {
    try {
      res.send({ message: "Registration Successful" });
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  const loginUser = (req, res, next) => {
    try {
      res.send({ message: "Login Successful" });
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };
  const forgotPassword = (req, res, next) => {
    try {
      res.send({ message: "Forgot password" });
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };
  const resetPassword = (req, res, next) => {
    try {
      res.send({ message: "Reset password" });
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };
  return {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
  };
};
export default authController;
