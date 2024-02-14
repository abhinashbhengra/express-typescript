import { NextFunction, Request, Response } from "express";

function getBookHandler(req: Request, res: Response, next: NextFunction) {
  console.log(req.name);

  res.send(req.name);
}

export default getBookHandler;
