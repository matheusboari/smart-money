import UsersService from '../services/UsersService'

class UsersController {
  async register (req, res) {
    let result = await UsersService.register(req.body)
    
    res.json(result)
  }

  async login (req, res) {
    let user = await UsersService.login(req.body)
    
    res.json(user)
  }

  async update (req, res) {
    res.json({ 'status': 'off' })
  }
}

export default new UsersController()
