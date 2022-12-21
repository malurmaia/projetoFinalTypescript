import User from '../models/User';
import { Op } from 'sequelize';
const bcrypt = require("bcryptjs")

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
                        msg: 'Login Successful',
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
            data: 'Invalid Data'
        }
    }
    async  register(data: Response){
        return{
            status: 200,
            data: {}
        }


    }

}

export default UserController;