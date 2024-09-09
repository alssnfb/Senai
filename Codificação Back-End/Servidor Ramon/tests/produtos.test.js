const request = require('supertest')
const app = require('../index')

describe('GET /produtos', () =>{
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200);
    
});
it('verificar se a lista de produtos está cheia', async() =>{
    const res = await request (app).get('/produtos').send();
    expect(res.body).toBeDefined()
}); 
})

describe('Criar /produtos', () => {
    it('criar produto', async () => {
        const res = await request(app).post('/produtos').send(
            {
                 "nome": "Celular",
                  "descricao": "Celular 4k brabissimo",
                  "preco": 4500,
                  "imagem": "celular.jpg"
            }
        )
        expect(res.status).toBe(204)
    })
})

describe('Atualizar /produtos/:id', () => {
    it('atualizar o nome do produto com sucesso', async () => {
        const res = await request(app).post('/produtos/e8801215-9b11-4a43-b979-344afccbfcc9').send(
            {
                nome:'alisson update',
            }
        )
        expect(res.status).toBe(204)
    })
})


describe('Deletar /produtos/:id', () => {
    it('deletar produto', async () => {
        const res = await request(app).delete('/produtos/1')
        expect(res.status).toBe(204)
    })
})