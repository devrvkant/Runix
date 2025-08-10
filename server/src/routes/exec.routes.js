import { Router } from "express";

import { runCode } from "../controllers/exec.controller.js";

const execRouter = Router();

// for running code
execRouter.post("/", runCode);

export default execRouter;
