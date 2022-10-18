const { faker } = require('@faker-js/faker');

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

  create (data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }

  find () {
    return this.users
  }

  findOne (id) {
    return this.users.find(item => item.id === id)
  }

  update () {

  }

  delete () {

  }
}

module.exports = UserService
