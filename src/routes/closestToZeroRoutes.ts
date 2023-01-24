import { Router } from "express";
import { closestToZero } from "../buisnessProcess/ClosestToZero";
import * as validator from "../validation/closestToZeroValidation";

export const basePath = "/closest-to-zero";

const closestToZeroRouter = Router();

closestToZeroRouter.post("/", validator.closestToZero, (req, res, next) => {
  const { values } = req.body;
  const result = closestToZero(values);

  return res.json({ result });
});

export default closestToZeroRouter;
