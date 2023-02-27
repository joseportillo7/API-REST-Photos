const request = require('supertest')
const app = require('../src/photos')


describe('GET request from /api/photos',()=>{
    test('should be response statusCode 200 - /api/photos/', async()=>{
        let response = await request(app).get('/api/photos/').send()
        expect(response.statusCode).toBe(200)
    })
    test('should be response statusCode 200 - /api/photos/1', async()=>{
        let response = await request(app).get('/api/photos/1').send()
        expect(response.statusCode).toBe(200)
    })
})

describe('GET request from /api/albums',()=>{
    test('should be response statusCode 200 - /api/albums/title', async()=>{
        let response = await request(app).get('/api/albums/enim').send()
        expect(response.statusCode).toBe(200)
    })
})

describe('GET request from /api/users/name',()=>{
    test('should be responde statusCode 200 - /api/users/name', async()=>{
        let response = await request(app).get('/api/users/Leanne').send()
        expect(response.statusCode).toBe(200)
    })
})