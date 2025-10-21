import ModelUser from '../model/users.js'
class ServiceUser {
    FindAll(){
        return ModelUser.FindAll()
    }
    FindOne(index){
        //verificar se o index é valido .lenfh
        return ModelUser.FindOne(index)
    }
    Create(nome){
        return ModelUser.Create(nome)
    }
    Update(index,nome){
        //verificar se o index e o nome é valido .lenfh
        return ModelUser.Update(index,nome)
    }
    Delete(index){
        return ModelUser.Delete(index)
    }
    
    
}
export default new ServiceUser()