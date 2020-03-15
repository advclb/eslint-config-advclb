const foo = require("./export");
const path = require("path");

foo.foo(path.join(__dirname, "bar"));
