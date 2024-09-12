const os = require("path");
console.log(os.type());
console.log(os.verison());
console.log(os.homedir());

const path = require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
