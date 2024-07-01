const userSchemaValidation = {
  email: {
    notEmpty: true,
    errorMessage: "Email is required",
    isEmail: true,
    errorMessage: "Email is not valid",
  },
  password: {
    notEmpty: true,
    errorMessage: "Password is required",
    isString: {
      errorMessage: "Password must be a string",
    },
    isLength: {
      options: {
        min: 6,
      },
      errorMessage: "Password must be at least 6 characters long",
    },
  },
  name: {
    notEmpty: true,
    errorMessage: "Name is required",
    isString: {
      errorMessage: "Name must be a string",
    },
  },
};
export default userSchemaValidation;
