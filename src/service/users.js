import User from '../model/users.js'
import jwt from 'jsonwebtoken'
const JWD_SEGREDO = "a-string-secret-at-least-256-bits-long"


class ServiceUser {
    async FindAll(){
        return User.FindAll()
    }
    async FindOne(id){
        //verificar se o index é valido .lenfh
        if (!id){
            throw new Error("Favor informar ID")
        }
        const user = await User.findByPk(id)
        if(!user){
            throw new Error("Usuario nao encontrado, id: "+id)

        }

        return user
    }
    async Create(nome,senha,email,ativo){
        if(!nome||!senha||!email){
            throw new Error("Favor preencer todods os campos")

        }
        await User.create({
            nome, senha, email, ativo
        })
    }
    async Update(id,nome,senha,email,ativo){
        //verificar se o index e o nome é valido .lenfh
        if(!id){
            throw new Error("Informar ID")
        }
        const user = await User.findByPk(id)
        if(!user){
            throw new Error("Usuario nao foi encontrado")
        }

        user.nome = nome
        user.senha = senha
        user.email = email
        user.ativo = ativo

        await user.save()
    }
    async Delete(id){
        if(!id){
            throw new Error("ID nao encontrado")
        }
        const user = await User.findByPk(id)
        if(!user){
            throw new Error("User nao encontrado")
        }
        user.destroy(id)
    }
    async Login(email,senha){
        if(!email || !senha){
            throw new Error("email ou senha invalidos")
        }
        const user = await User.findOne({where:{email}})
        if(!user|| !user.senha){
            throw new Error("email ou senha invalidos")
        }
        return jwt.sign({id: user.id, nome: user.nome },JWD_SEGREDO,{expiresIn: 60*60})
    }
    
}
export default new ServiceUser()