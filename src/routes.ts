import { Router } from "express";
import closestToZeroRouter, { basePath } from "./routes/closestToZeroRoutes";

const routes: Router = Router();

routes.get("/", (_, res) => {
  return res.json({ message: "Hi there :)!" });
});

// add closest to zero routes ...
routes.use(basePath, closestToZeroRouter);

export default routes;
