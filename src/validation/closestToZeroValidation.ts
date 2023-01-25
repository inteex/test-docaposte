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
  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(422).json({
      message: error.details.map((x) => x.message).join(", "),
    });
  } else {
    req.body = value;
    next();
  }
};
