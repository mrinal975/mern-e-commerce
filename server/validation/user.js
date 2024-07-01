export const validateUserSchema = {
  email: {
    notEmpty: true,
    errorMessage: "Email is required",
    isEmail: true,
    errorMessage: "Invalid Email",
  },
  password: {
    notEmpty: true,
    errorMessage: "Password is required",
    isLength: {
      errorMessage: "Password must be at least 6 characters",
      options: { min: 6 },
    },
  },
  name: {
    notEmpty: true,
    errorMessage: "Name is required",
  },
};
