const app = require("./app");
import { PORT, ENV } from "./config";
import { sequelize } from "./sequelize";

(async () => {
  try {
    await sequelize.sync();
  } catch (err) {
    console.log(err);
  }

  app.listen(PORT, () =>
    console.log(`server started: PORT: ${PORT} | ENV: ${ENV}`)
  );
})();
