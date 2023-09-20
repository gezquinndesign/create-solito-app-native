const { default: InvalidNameError } = require("./errors/InvalidNameError");
const { default: ReservedNameError } = require("./errors/ReservedNameError");
const { default: HelloWorldError } = require("./errors/HelloWorldError");

const NAME_REGEX = /^[$a-z_][0-9a-z_$]*$/;

// ref: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html
const javaKeywords = [
  "abstract",
  "continue",
  "for",
  "new",
  "switch",
  "assert",
  "default",
  "goto",
  "package",
  "synchronized",
  "boolean",
  "do",
  "if",
  "private",
  "this",
  "break",
  "double",
  "implements",
  "protected",
  "throw",
  "byte",
  "else",
  "import",
  "public",
  "throws",
  "case",
  "enum",
  "instanceof",
  "return",
  "transient",
  "catch",
  "extends",
  "int",
  "short",
  "try",
  "char",
  "final",
  "interface",
  "static",
  "void",
  "class",
  "finally",
  "long",
  "strictfp",
  "volatile",
  "const",
  "float",
  "native",
  "super",
  "while",
];

const reservedNames = ["react", "react-native", ...javaKeywords];

function validateProjectName(name) {
  if (!String(name).match(NAME_REGEX)) {
    throw new InvalidNameError(name);
  }

  const lowerCaseName = name.toLowerCase();
  if (reservedNames.includes(lowerCaseName)) {
    throw new ReservedNameError(lowerCaseName);
  }

  if (name.match(/helloworld/gi)) {
    throw new HelloWorldError();
  }
}

module.exports = { validateProjectName };
