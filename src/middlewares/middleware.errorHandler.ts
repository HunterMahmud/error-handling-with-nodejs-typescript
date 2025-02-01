import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "./../core/err";
export const errorMiddleware = (
  error: ErrorHandler,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(error.message, error.name, error.statusCode);
  error.statusCode = error.statusCode || 500;
  console.log("🚀 ~ statusCode:", error.statusCode);
  error.message = error.message || "Server Error";

  if (false) { // if node.ENV == production then we use this
    process.stderr.write(
      "==================== \n" +
        "Error: " +
        error.message +
        "\n" +
        "Stack: " +
        error.stack +
        "\n" +
        "==================== \n"
    );
  } else {
    console.warn(
      "==================== ERROR Starts =================== \n" +
        "Error: " +
        error.message +
        "\n" +
        "Stack: " +
        error.stack +
        "\n" +
        "==================== ERROR Ends ===================\n"
    );
  }

  /**
   * next function diyew pass korte pari
   */ 

  next(res.status(error.statusCode).json({
    success: false,
    status: error.statusCode,
    message: error.message
  }))
  
/**
 * othoba return o kore dite pari kintu eitar jonno index.ts file a kicu change korte hobe
 */
  // return res.status(error.statusCode).json({
  //     success: false,
  //     status: error.statusCode,
  //     message: error.message
  //   })
};
