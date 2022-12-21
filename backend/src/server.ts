import express from "express";
import { Router, Request, Response} from "express";
import cors from 'cors';

// Rotas
import auth from "./routes/auth";
import game from "./routes/game";

// Database
import { sequelize } from "./db";
import Game from "./models/Game";

const app = express();
const route = Router();

app.use(express.json());
app.use(cors());

route.get("/", (req: Request, res: Response) => {
    res.json({message: 'app running'})
});

app.use(route);
app.use("/auth", auth);
app.use("/game", game)

sequelize.sync()

app.listen(3000, () => 'servidor rodando');