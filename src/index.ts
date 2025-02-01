import express, { Application, Request, Response } from "express";
import { ErrorHandler } from './core/err';
import userRouter from './routes/routes.signUp'
import { errorMiddleware } from './middlewares/middleware.errorHandler';
import { appDataSource } from './db/index';

const PORT = process.env.PORT || 3000;

const bootstrap = async(app: Application) => {

    app.use(express.json())

    await appDataSource.initialize();

    app.get('/', async(req:Request, res: Response)=>{
        res.json({status:200, message: "hello server"})
    })
    
    app.use('/signup', userRouter);
    /**
     * app.all diye avabew throw korle pari othoba nicher moto korew korte pari
     * method: 1
     */
    
    // app.all("*",  (req:Request, res: Response)=>{ // method: 1*
    //     throw new ErrorHandler("not found", 404)
    // })
    
    /**
     * app.use diye avabew throw korle pari othoba nicher moto korew korte pari
     * tokhon abr middleware er vitore onek kicui extra kore korte hobe
     * method: 2
     */
    // app.use("*", errorMiddleware); // method: 2
    
    app.use(errorMiddleware);
    
    app.listen(PORT, ()=>{
        console.log(`server is running on port: ${PORT}`);
    })
}


bootstrap(express()).catch(error=>{
    console.warn(error);
});

