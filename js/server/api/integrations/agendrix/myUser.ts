import { Request, Response } from "express";

import myUser from "./requests/myUser";
import exec from "./requests/exec";
import { fetchTokenFirst } from "./requests/utils";
import { InMemoryDatabase } from "../../../lib";

export default async (req: Request, res: Response) => {
  if (fetchTokenFirst(res)) return;

  const { access_token } = InMemoryDatabase.first();
  const request = myUser(access_token);

  await exec(req, res, request);
};
