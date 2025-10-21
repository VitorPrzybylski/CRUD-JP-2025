const nomes = new Array("Jao", "Maria", "Xuxa")
class ModelUsers {
    FindAll() {
        return nomes
    }
    FindOne(index) {
        return nomes[index]
    }
    Create(nome) {
        nomes.push(nome)
        console.log(nomes)
    }
    Update(index,nome) {
        return [index] = nome
    }
    Delete(index) {
        return nomes.splice(index,1)
    }

}
export default new ModelUsers()
