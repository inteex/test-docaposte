import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";

const schema: ObjectSchema = Joi.object().keys({
  values: Joi.array().items(Joi.number()).min(2),
});

export const closestToZero = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log({req, res});
  const { error, value } = schema.validate(req.body);

  if (error) {
    // on fail return comma separated errors
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    // on success replace req.body with validated value and trigger next middleware function
    req.body = value;
    next();
  }
};
