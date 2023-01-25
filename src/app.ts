import express, { NextFunction } from "express";
import morgan from "morgan";

import routes from "./routes";
// @ts-ignore
import swaggerJSDoc from "swagger-jsdoc";
// @ts-ignore
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./swagger/config";
import { Express } from "express-serve-static-core";

const swaggerSpec = swaggerJSDoc(swaggerOptions);
class App {
  public server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan("dev"));
    this.server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
