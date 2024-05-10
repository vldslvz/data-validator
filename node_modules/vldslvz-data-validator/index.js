const DataValidator = {
    validateString: (value, minLength, maxLength) => {
      if (typeof value !== 'string') {
        throw new Error('Value must be a string');
      }
      if (minLength !== undefined && value.length < minLength) {
        throw new Error(`String must be at least ${minLength} characters long`);
      }
      if (maxLength !== undefined && value.length > maxLength) {
        throw new Error(`String must be at most ${maxLength} characters long`);
      }
      return true;
    },
  
    validateNumber: (value, min, max) => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('Value must be a number');
      }
      if (min !== undefined && value < min) {
        throw new Error(`Number must be at least ${min}`);
      }
      if (max !== undefined && value > max) {
        throw new Error(`Number must be at most ${max}`);
      }
      return true;
    },
  
    validateEmail: (value) => {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        throw new Error('Invalid email format');
      }
      return true;
    },
  
    // Add more validation methods as needed
  };
  
  module.exports = DataValidator;
  