#!/usr/bin/env node

// Usage: npx create-solito-app-native my-app

const {
  default: DirectoryAlreadyExistsError,
} = require("./errors/DirectoryAlreadyExistsError");
const { validateProjectName } = require("./validate");

const spawn = require("cross-spawn");
const fs = require("fs");
const path = require("path");

// // The first argument will be the project name.
const projectName = process.argv[2];

function doesDirectoryExist(dir) {
  return fs.existsSync(dir);
}

try {
  validateProjectName(projectName);
  if (doesDirectoryExist(projectName)) {
    throw new DirectoryAlreadyExistsError(projectName);
  }
} catch (e) {
  console.error(e.message);
  process.exit(1);
}

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);

// Run `npm install` in the project directory to install
// the dependencies. We are using a third-party library
// called `cross-spawn` for cross-platform support.
// (Node has issues spawning child processes in Windows).
spawn.sync(
  "git",
  [
    "clone",
    "https://github.com/gezquinndesign/solito-native-starter.git",
    projectName,
  ],
  { stdio: "inherit" }
);
spawn.sync("npx", ["react-native-rename@latest", projectName], {
  cwd: `${projectName}/apps/native`,
  stdio: "inherit",
});
spawn.sync("yarn", [], {
  cwd: `${projectName}`,
  stdio: "inherit",
});
spawn.sync("npx", ["pod-install@latest"], {
  cwd: `${projectName}/apps/native`,
  stdio: "inherit",
});
spawn.sync("rm", ["-rf", ".git"], {
  cwd: `${projectName}/apps/native`,
  stdio: "inherit",
});

console.log(`Success! created ${projectName} at ${projectDir}`);
console.log(
  "\n\n" +
    "Inside that directory, you can run several commands:" +
    "\n\n" +
    "  yarn web" +
    "\n" +
    "    Starts the development server for the Next.js site." +
    "\n\n" +
    "  yarn native" +
    "\n\n" +
    "We suggest you begin by typing:" +
    "\n\n" +
    `  cd ${projectName}` +
    "\n" +
    `  yarn web`
);
