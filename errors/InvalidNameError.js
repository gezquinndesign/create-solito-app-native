const { CLIError } = require("@react-native-community/cli-tools");

class InvalidNameError extends CLIError {
  constructor(name) {
    super(
      `"${name}" is not a valid name for a project. Please use a valid identifier name (lowercase, URL-friendly, alphanumeric characters).`
    );
  }
}

module.exports = {
  default: InvalidNameError,
};
