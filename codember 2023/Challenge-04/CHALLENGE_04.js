import fs from "node:fs";

const main = () => {
  fs.readFile("./Challenge-04/message_04.txt", "utf-8", async (err, data) => {
    if (err) throw err;
    getAnswer(data);
  });
};

console.log(data);
