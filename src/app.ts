import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello Abhinash");
});

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;

    next();
  };

app.use(middleware({ name: "BobloveTypescript" }));

routes(app);

app.listen(3000, () => {
  console.log("Application is running on http://localhost:3000");
});
