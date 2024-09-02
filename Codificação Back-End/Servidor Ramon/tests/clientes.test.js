const request = require('supertest')
const app = require('../index')

describe('GET /cliente', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/cliente').send()
        expect(res.status).toBe(200)
    })
    it('verificar se a lista de clientes esta cheia', async () => {
        const res = await request(app).get('/cliente').send()
        expect(res.body).toBeDefined()
    })
})

describe('Atualizar /cliente/:id', () => {
    it('Atualizar nome do cliente com sucesso', async() =>{
        const res = await request(app).put('/cliente/c2da497b-c598-461a-a26a-d003ff23f392').send({
            nome: 'ramon update'
        })
        expect(res.status).toBe(204)
    })
})