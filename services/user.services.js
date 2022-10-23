const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom')
class UserService {

  constructor () {
    this.users = []
    this.generate()
  }

  generate() {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        fullName: faker.name.fullName(),
        avatar: faker.image.avatar(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
      })
    }
  }

  async create (data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }

  async find () {
    return this.users
  }

  async findOne (id) {
    // const name = getAlgo() // this line generate a error
    const user = this.users.find(item => item.id === id)
    if (!user) {
      throw boom.notFound('user not found')
    }
    return user
  }

  async update (id, changes) {
    const index = this.users.findIndex(item => item.id === id)
    if (index) {
      throw boom.notFound('product not found')
    }
    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index]
  }

  async delete (id) {
    const index = this.users.findIndex(item => item.id === id)
    if (index) {
      throw boom.notFound('product not found')
    }
    this.users.splice(index, 1)
    return { id }
  }
}

module.exports = UserService
