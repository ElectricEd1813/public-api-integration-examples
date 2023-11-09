import { Request, Response } from "express";

import myOrganizationPositions from "./requests/myOrganizationPositions";
import exec from "./requests/exec";
import { fetchTokenFirst } from "./requests/utils";
import { InMemoryDatabase } from "../../../lib";

export default async (req: Request, res: Response) => {
  if (fetchTokenFirst(res)) return;

  const { access_token } = InMemoryDatabase.first();
  const request = myOrganizationPositions(access_token, req.query);

  await exec(req, res, request);
};
