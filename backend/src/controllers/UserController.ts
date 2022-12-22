import User from '../models/User';
import { Op } from 'sequelize';
const bcrypt = require("bcryptjs")
import IUser from '../interfaces/iuser';

class UserController {
    user;

    constructor(){
        this.user = new User();
    }

    async login(data: any){ 
        const { userEmail, password } = data;

        const user: any  = await User.findOne({
            where: {
                [Op.or]: {
                    username: userEmail,
                    email: userEmail
                }
            }
        })
        if (user) {
            const verifyPass = bcrypt.compareSync(password, user.password)
            if (verifyPass) {
                const { id, username, email, name, createdAt, updatedAt } = user;
                return {
                    status: 200,
                    data: {
                        msg: 'Logado com sucesso',
                        user: {
                            id,
                            username,
                            email,
                            name,
                            createdAt,
                            updatedAt
                        }
                    }
                }
            }
        }
        return {
            status: 401,
            data: 'dado inválido'
        }
    }
    async register(data: IUser) {
        let { username, email, name, password } = data;
        let user: any = await User.findOne({
            where: {
                username: username,
            }

        })
        if (user) {
            return {
                status: 409,
                data: { mag: "Username em uso" }
            }
        }
        user = await User.findOne({
            where: {
                email: email,
            }
        })

        if (user) {
            return {
                status: 409,
                data: { mag: "Este email já foi cadastrado." }
            }
        }

        user = await User.create({
            username,
            email,
            name,
            password: bcrypt.hashSync(password, 10)
        });
        return {
            status: 201,
            data: {
                msg: "Usuário criado com sucesso."
            }
        }
    }
}

export default UserController;