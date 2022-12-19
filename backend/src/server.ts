import express from "express";
import { Router, Request, Response} from "express";
import cors from 'cors';

// Rotas
import { auth } from "./routes/auth";

// Database
import { sequelize } from "./db";

const app = express();
const route = Router();

app.use(express.json());
app.use(cors());

route.get("/", (req: Request, res: Response) => {
    res.json({message: 'app running'})
});

app.use(route);
app.use("/auth", auth);

sequelize.sync()

app.listen(3000, () => 'servidor rodando');