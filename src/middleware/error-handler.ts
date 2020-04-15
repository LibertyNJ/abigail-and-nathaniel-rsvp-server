import { NextFunction, Request, Response } from 'express';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);
  res
    .status(500)
    .json('The server has encountered an unexpected error. Please try again.');
}
