# Data Validation Library

A lightweight JavaScript library for data validation in Node.js and browser environments.

## Installation

You can install the Data Validation Library via npm:

```bash
npm install data-validation-library
```

## Usage

```javascript
const DataValidator = require('data-validation-library');

// Validate a string
try {
  DataValidator.validateString('hello', 3, 10); // Valid string with length between 3 and 10 characters
  console.log('String is valid');
} catch (error) {
  console.error(error.message);
}

// Validate a number
try {
  DataValidator.validateNumber(42, 0, 100); // Valid number between 0 and 100
  console.log('Number is valid');
} catch (error) {
  console.error(error.message);
}

// Validate an email
try {
  DataValidator.validateEmail('example@example.com'); // Valid email format
  console.log('Email is valid');
} catch (error) {
  console.error(error.message);
}
```

## API

### `validateString(value, minLength, maxLength)`

Validates a string with optional minimum and maximum lengths.

- `value`: The string to validate.
- `minLength`: Optional minimum length of the string.
- `maxLength`: Optional maximum length of the string.

### `validateNumber(value, min, max)`

Validates a number with optional minimum and maximum values.

- `value`: The number to validate.
- `min`: Optional minimum value of the number.
- `max`: Optional maximum value of the number.

### `validateEmail(value)`

Validates an email address using a basic regular expression.

- `value`: The email address to validate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
