import UsersRepository from '../repositories/UsersRepository'

class UsersService {
    constructor () {
        this.moment = global.moment
    }

    async register(query) {
        let verifyLogin = await verifyValues({login: query.login}, 'Login')
        let verifyEmail = await verifyValues({email: query.email}, 'Email')

        if(!verifyLogin.status) {
            return verifyValues({login: query.login}, 'Login')
        } else if(!verifyEmail.status) {
            return verifyValues({email: query.email}, 'Email')
        } else {
            return registerUser (query)
        }

        async function verifyValues (query, type) {
            let exists = await UsersRepository.get(query)

            if(exists.length == 0)
                return {status: true}
            else return { status: false, details: `${type} já cadastrado.` }
        }

        async function registerUser (query) {
            const user = await UsersRepository.register(query, (data, err) => {
                if(err) console.log(err)
            })
            return user
        }
    }

    async login (query) {
        const user = await verifyUser ({login: query.login})
        const password = await verifyPass ({password: query.password})

        if(user.status) {
            return user
        } else if(password.status) {
            return password
        } else login (query)

        async function verifyUser (query) {
            let exists = await UsersRepository.get(query)

            if(exists.length == 0)
                return { status: false, details: `Usuário não existente.` }
            else return {status: true}
        }
        async function verifyPass (query) {
            let exists = await UsersRepository.get(query)

            if(exists.length == 0)
                return { status: false, details: `Senha inválida.` }
            else return {status: true}
        }
        async function login (query) {
            return await UsersRepository.get(query)
        }
    }
}

export default new UsersService()