import  { Router, Request, Response} from "express";
const game = Router();


game.get("/score", async (req: Request, res:Response) => {
   res.json({message: 'Placar de todos'})
});

game.get("/score/:id", async (req: Request, res:Response) => {
    res.json({message: 'Placar de 1 usuário'})
});
game.post("/score", async (req: Request, res:Response) => {
    res.json({message: 'Cria um novo placar'})
});

export default game;