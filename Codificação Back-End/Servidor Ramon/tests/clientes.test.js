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

describe('Criar /cliente', () => {
    it('criar cliente', async () => {
        const res = await request(app).post('/cliente').send(
            {
                nome: "Fulano",
                email: "fulano@gmail.com",
                senha: "12345"
            }
        )    
        expect(res.status).toBe(204)
    }) 
})

describe('Atualizar /cliente/:id', () => {
    it('Atualizar nome do cliente com sucesso', async() =>{
        const res = await request(app).post('/cliente/21c97a81-bed9-4ded-8be7-118510a97e86').send(
            {
            nome: 'alisson update 2'
            }
        )
        expect(res.status).toBe(204)
    })
})

describe('Deletar /cliente/:id', () => {
    it('Deletar cliente efetuado com sucesso', async() => {
        const res = await request(app).delete('/cliente/12963a68-9ea5-42e3-9d9d-e8fbaf8c9afd')
        expect(res.status).toBe(204)
    })
})