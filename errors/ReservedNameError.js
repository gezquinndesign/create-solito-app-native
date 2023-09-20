const { CLIError } = require("@react-native-community/cli-tools");

class ReservedNameError extends CLIError {
  constructor(name) {
    super(
      `Not a valid name for a project. Please do not use the reserved word "${name}".`
    );
  }
}

module.exports = {
  default: ReservedNameError,
};
