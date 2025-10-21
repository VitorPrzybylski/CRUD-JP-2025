import ServiceUser from '../service/users.js'
class ControllerUser {
    FindAll(req, res) {
        try {
            const nomes = ServiceUser.FindAll()
            res.send({nomes})
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    FindOne(req, res) {
        try {
            const index = req.params.index
            const nome = ServiceUser.FindOne(index)
            res.send({nome})
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    Create(req, res) {
        try {
            const nome = req.body.nome
            const resultado = ServiceUser.Create(nome)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    Update(req, res) {
        const index = req.params.index
        const nome = req.body.nome
        try {
            const resultado = ServiceUser.Update(index,nome)
            res.status(200).send({resultado})
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    Delete(req, res) {
        const index = req.params.index
        try {
            ServiceUser.Delete(index)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}


export default new ControllerUser()