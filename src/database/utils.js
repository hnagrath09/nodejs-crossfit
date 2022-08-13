const fs = require("fs")
const path = require("path")

const saveToDatabase = (DB) => {
  fs.writeFileSync(
    path.join(__dirname, "./db.json"),
    JSON.stringify(DB, null, 2),
    { encoding: "utf-8" },
  )
}

module.exports = { saveToDatabase }
