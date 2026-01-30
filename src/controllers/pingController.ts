import type { Request, Response } from "express";

export const pingController = (req: Request, res: Response) => {
  try {
    console.log("Ping controller");
    return res.status(200).json({
      msg: "PING CONTROLLER",
    });
  } catch (error) {
    console.log(error);
  }
};
