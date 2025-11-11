import { hash } from "bcrypt";
import jwt from 'jsonwebtoken'
import ServiceUser from '../service/users.js'
const JWD_SEGREDO = "a-string-secret-at-least-256-bits-long"
export default async function authMiddleware(req, res, next) {
    const token = req.headers['authorization']
    try {
        if(!token){
            throw new Error("sem permissao")
        }
        const decoded =jwt.verify(token.split(' ')[1],JWD_SEGREDO)
        const user = await ServiceUser.FindOne(decoded.id)
        console.log(decoded)
        req.headers.user=user
        next()
        

    } catch (erro) {
        res.status(403).send({
            data:null,
            msg:erro.message,
            error:true
        })
        
    }
    
    
    // //se der certo
    // //deu errado
    
}
