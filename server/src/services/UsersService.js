import UsersRepository from '../repositories/UsersRepository'

class UsersService {
    constructor () {
        this.moment = global.moment
    }

    async register(query) {
        let exists = await UsersRepository.get(query)
        if(exists.length == 0) {
            let user = await UsersRepository.register(query, (data, err) => {
                if(err) console.log(err)
            })
            console.log('user >> ', user)
            const result = Promise.all(user)
            return { result, status: true }
        } else {
            return { status: false }
        }

    }
}

export default new UsersService()