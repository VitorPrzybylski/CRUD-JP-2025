import User from '../model/users.js'
class ServiceUser {
    FindAll(){
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
    
    
}
export default new ServiceUser()