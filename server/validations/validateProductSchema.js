const productSchema = {
  title: {
    notEmpty: true,
    errorMessage: "Title is required",
    isString: {
      errorMessage: "Title must be a string",
    },
  },
  image: {
    notEmpty: true,
    errorMessage: "Image is required",
  },
  description: {
    notEmpty: true,
    errorMessage: "Description is required",
    isString: {
      errorMessage: "Description must be a string",
    },
  },
  price: {
    notEmpty: true,
    errorMessage: "Price is required",
    isNumeric: {
      errorMessage: "Price must be a number",
    },
  },
  stock: {
    notEmpty: true,
    errorMessage: "Stock is required",
    isNumeric: {
      errorMessage: "Stock must be a number",
    },
  },
  category: {
    notEmpty: true,
    errorMessage: "Category is required",
    isString: {
      errorMessage: "Category must be a string",
    },
  },
};

export default productSchema;
