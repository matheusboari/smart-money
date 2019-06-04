import UsersService from '../services/UsersService'

class UsersController {
  async register (req, res) { res.json(await UsersService.register(req.body)) }

  async login (req, res) { res.json(await UsersService.login(req.body)) }

  async update (req, res) { res.json({ 'status': 'off' }) }

  async createWallet (req, res) { res.json(await UsersService.createWallet(req.body)) }
  
  async deleteAccount (req, res) { res.json(await UsersService.deleteAccount(req.params.id)) }

  async deleteWallet (req, res) { res.json(await UsersService.deleteWallet(req.body)) }
}

export default new UsersController()
