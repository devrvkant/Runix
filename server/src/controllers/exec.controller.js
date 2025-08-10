import { config } from "../config/env.js";

import axios from "axios";

export const runCode = async (req, res) => {
  try {
    const { source_code, language_id, stdin } = req.body;

    if (!source_code || !language_id) {
      return res.status(400).json({ error: "source_code and language_id are required!" });
    }

    // send code to runixExecuter
    const submission = await axios.post(`${config.runixExecUrl}/submissions/?base64_encoded=false&wait=true`, {
        source_code,
        language_id,
        stdin
    },
    {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const result = submission.data;
    // build clean response of execution result
    const resPayload = {
      output: result.stdout ? result.stdout.trim() : "",
      errors: result.stderr ? result.stderr.trim() : "",
      compile_output: result.compile_output ? result.compile_output.trim() : "",
      time: result.time,
      memory: result.memory,
      status: result.status?.description || "Unknown"
    }

    res.status(200).json({
        success: true,
        message: "Execution Successful.",
        execResult: resPayload
    });
  } catch (err) {
    console.error("Error occurred while running code:", err.message);
    res.status(500).json({
        success: false,
        message: "Internal Server Error, please try again later!"
    });
  }
};
