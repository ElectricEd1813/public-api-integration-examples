import { Request, Response } from "express";
import { InMemoryDatabase } from "../../../../../lib";

export default (res: Response) => {
  if (!InMemoryDatabase.first()) {
    res
      .status(500)
      .json({ error: "You need to fetch the oauth tokens first." });

    return true;
  }

  return false;
};
