import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from './../core/err';

export const signUp = async (req:Request, res:Response, next: NextFunction) => {
    next(new ErrorHandler("Unauthorize access", 403))
}
