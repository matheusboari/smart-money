import UsersService from '../services/UsersService'

class UsersController {
  async register (req, res) { res.json(await UsersService.register(req.body)) }

  async login (req, res) { res.json(await UsersService.login(req.body)) }

  async update (req, res) { res.json({ 'status': 'off' }) }
}

export default new UsersController()
