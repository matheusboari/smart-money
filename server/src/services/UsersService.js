import UsersRepository from '../repositories/UsersRepository'
import axios from 'axios'

class UsersService {
    constructor () {
        this.moment = global.moment
    }

    async createWallet (query) {
        const user = await UsersRepository.getOne({ login: query.login })
        let amount = Number(query.value)
        let amountArr = []
        let percentage = []
        query.date = moment(query.date).unix()
        amountArr.push({
            value: query.value,
            date: query.date
        })
        if(query.type == 'selic') { //Selic
            await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json')
            .then(({data}) => {
                data.map(tax => {
                    const date = moment(tax.data, 'DD/MM/YYYY')
                    if(date.unix() >= query.date) {
                        const daily = this.DailyTax(tax.valor)
                        amount += Number(amount) * Number(daily)
                        amountArr.push({
                            value: amount.toFixed(2),
                            date: date.unix()
                        })
                        percentage.push({
                            value: Number(daily),
                            date: date.unix()
                        })
                    }
                })
            })
            .catch(err => console.log(err))
        } else if(query.type == 'ipca') { //IPCA
            await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.10841/dados?formato=json')
            .then(({data}) => {
                data.map(tax => {
                    const date = moment(tax.data, 'DD/MM/YYYY')
                    if(date.unix() >= query.date) {
                        const daily = this.DailyTax(tax.valor)
                        amount += Number(amount) * Number(daily)
                        amountArr.push({
                            value: amount.toFixed(2),
                            date: date.unix()
                        })
                        percentage.push({
                            value: Number(daily),
                            date: date.unix()
                        })
                    }
                })
            })
            .catch(err => console.log(err))
        } else if(query.type == 'cdi') { //CDI
            await axios.get('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4176/dados?formato=json')
            .then(({data}) => {
                data.map(tax => {
                    const date = moment(tax.data, 'DD/MM/YYYY')
                    if(date.unix() >= query.date) {
                        const daily = this.DailyTax(tax.valor)
                        amount += Number(amount) * Number(daily)
                        amountArr.push({
                            value: amount.toFixed(2),
                            date: date.unix()
                        })
                        percentage.push({
                            value: Number(daily),
                            date: date.unix()
                        })
                    }
                })
            })
            .catch(err => console.log(err))
        }

        const newWallet = {
            name: query.name,
            amount: amountArr,
            indexer: {
                name: query.type,
                percentage
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
        
        return user
    }

    async deleteWallet (user) {
        UsersRepository.update(user._id, user, (err, data) => {
            if (err) console.log(err)
        })
    }

    DailyTax (monthTax) {
        return Math.pow((1 + (monthTax / 100)), (1/30)) - 1
    }

    async deleteAccount (id) {
        return UsersRepository.delete(id, (err, data) => { if(err) console.log(err) })
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