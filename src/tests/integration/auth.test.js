const request = require('supertest')
const Knex_func = require('knex')
const knex = require('../../../knexfile')
const app = require('../../app')
const db = Knex_func(knex[process.env.NODE_ENV])

describe('/auth', () => {
  describe('POST /auth/register', () => {
    let registerData

    beforeEach(async () => {
      ;(registerData = {
        first_name: 'user1',
        last_name: 'user_lastname',
        email: 'user_email@gmail.com',
        password: 'user1',
      }),
        await db('users').truncate()
    })

    const exec = async () => {
      return await request(app)
        .post('/auth/register')
        .set('Accept', 'application/json')
        .send(registerData)
    }

    it('should return 422 if password is less than 6', async () => {
      registerData.password = '12345'

      const response = await exec()
      expect(response.status).toEqual(422)
      expect(response.body).toHaveProperty('message')
    }, 90000)

    it('should return 422 if email already exist', async () => {
      registerData.email = 'user_email@gmail.com'

      const response = await exec()
      expect(response.status).toBe(422)
    }, 90000)

    it('should insert data if everything is ok', async () => {
      registerData.password = '1234567'
      registerData.email = 'user8_email@gmail.com'
      const response = await exec()

      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty('message')
      expect(response.body.data.last_name).toBe(registerData.last_name)
    }, 90000)
  })

  describe('GET /check-email/:email', () => {
    it('should return an email if a valid email is passed', async () => {
      const email = { email: 'user@gmail.com' }
      const response = await request(app).get('/auth/check-email/' + email)

      expect(response.status).toBe(200)
    }, 90000)
  })

  describe('POST /login', () => {
    let user

    const exec = async () => {
      return await request(app)
        .post('/auth/login')
        .set('Accept', 'application/json')
        .send(user)
    }

    beforeEach(async () => {
      user = {
        email: 'user8_email@gmail.com',
        password: '1234567',
      }
    })

    it('should login user if details are correct', async () => {
      const response = await exec()

      expect(response.body.data.email).toBe(user.email)
      expect(response.status).toBe(200)
    }, 90000)
  })
})
