const request = require('supertest')
const app = require('../index')

describe('GET /cliente', () =>{
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/cliente').send();
        expect(res.status).toBe(200);
    
});
it('verificar se a lista de clientes está cheia', async() =>{
    const res = await request (app).get('/cliente').send();
    expect(res.body).toBeDefined()
}); 
})

describe('Criar /cliente', () => {
    it('criar cliente', async () => {
        const res = await request(app).post('/cliente').send(
            {
                nome:'jorel',
                email:'jorel@example.com',
                senha:'@K2VB'
            }
        )
        expect(res.status).toBe(204)
    })
})

describe('Atualizar /cliente/:id', () => {
    it('atualizar o nome do cliente com sucesso', async () => {
        const res = await request(app).post('/cliente/1').send(
            {
                nome:'alisson update',
            }
        )
        expect(res.status).toBe(200)
    })
})


describe('Deletar /cliente/:id', () => {
    it('deletar cliente', async () => {
        const res = await request(app).delete('/cliente/2c96d7a4-933a-47bf-968f-f62f0457ffa8')
        expect(res.status).toBe(204)
    })
})