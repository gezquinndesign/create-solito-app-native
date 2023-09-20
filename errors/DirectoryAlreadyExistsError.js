const { CLIError } = require("@react-native-community/cli-tools");

class DirectoryAlreadyExistsError extends CLIError {
  constructor(directory) {
    super(
      `Cannot initialize new project because directory "${directory}" already exists.`
    );
  }
}

module.exports = {
  default: DirectoryAlreadyExistsError,
};
