const fs = require("fs");

const QTD_TASKS = 3;

function createTask(index = 0) {
  let id = index + 1;
  let name = `Example #${id.toString().padStart(3, "0")}`;
  let status = {
    name: "waiting",
    done: false,
  };

  return {
    id,
    name,
    status,
  };
}

const TASKS = [];

for (let index = 0; index < QTD_TASKS; index++) {
  TASKS.push(createTask(index));
}

const jsonContent = `{"tasks": ${JSON.stringify(TASKS)}}`;

fs.writeFile(__dirname + "/db.json", jsonContent, "utf-8", function (err) {
  if (err) {
    console.error("An error occured while writing JSON Object to File...");
    return console.error(err);
  }

  console.log("db.json has been saved!");
});
