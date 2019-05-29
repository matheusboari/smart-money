import UsersRepository from '../repositories/UsersRepository'

class UsersService {
    constructor () {
        this.moment = global.moment
    }

    async createWallet (query) {
        const user = await UsersRepository.getOne({ login: query.login })
        const newWallet = {
            name: query.name,
            amount: [{
                value: query.value,
                date: query.date
            }],
            indexer: {
                name: query.type,
                percentage: []
            },
            startDate: query.date,
            endDate: null,
            stop: false
        }
        user.wallet.push(newWallet)
        UsersRepository.update(user._id, {
            $set: {
                wallet: user.wallet
            }
          }, (err, data) => {
            if (err) console.log(err)
        })
        console.log(user)
    }

    async register(query) {
        let verifyLogin = await verifyValues({login: query.login}, 'Login')
        let verifyEmail = await verifyValues({email: query.email}, 'Email')

        if(!verifyLogin.status) return verifyValues({login: query.login}, 'Login')
        else if(!verifyEmail.status) return verifyValues({email: query.email}, 'Email')
        else {
            UsersRepository.register(query, (err, data) => {  if(err) console.log(err) })
            return { status: true }
        }

        async function verifyValues (query, type) {
            let exists = await UsersRepository.get(query)

            if(exists.length == 0) return {status: true}
            else return { status: false, details: `${type} já cadastrado.` }
        }
    }
    
    async login (query) {
        const user = await UsersRepository.getOne(query)

        if(user) return { status: true, user }
        else return { status: false, details: 'Login ou senha inválidos ou já existentes.' }
    }
}

export default new UsersService()