import app from "./app.js";
import { sequelize } from "./database/db.js";
import "dotenv/config";

const PORT = process.env.PORT ?? 3000;

async function main() {
  try {
    await sequelize.sync();
    console.log("Connection has been established succesfully");
  } catch (error) {
    console.log(error);
  }

  app.listen(PORT, () => {
    console.log("Server on port:", PORT);
  });
}

main();
