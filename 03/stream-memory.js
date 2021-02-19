const fs = require("fs");

console.log("before: ", process.memoryUsage().rss);

const readStreame = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./big3.txt");
readStreame.pipe(writeStream);
readStreame.on("end", () => {
  console.log("stream: ", process.memoryUsage().rss);
});
