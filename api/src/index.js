import { app } from "./Server/app";

// Create a main function
const main = () => {
  // Send app instance and set port listen
  app.listen(app.get("port"));
  console.log(`Server is rining in port ${app.get("port")}`);
};

main();
