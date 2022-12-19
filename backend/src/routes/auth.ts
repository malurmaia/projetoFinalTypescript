import  { Router, Request, Response} from "express";
const auth = Router();


auth.post("/login", async (req: Request, res:Response) => {
   res.json({message: 'Login'})
});

auth.post("/resgister", async (req: Request, res:Response) => {
    res.json({message: 'Registro'})
});

export {
    auth
}