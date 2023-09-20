const { CLIError } = require("@react-native-community/cli-tools");

class HelloWorldError extends CLIError {
  constructor() {
    super(
      "Project name shouldn't contain \"HelloWorld\" name in it, because it is CLI's default placeholder name."
    );
  }
}

module.exports = {
  default: HelloWorldError,
};
