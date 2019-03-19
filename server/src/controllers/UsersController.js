import UsersService from '../services/UsersService'

class UsersController {
  async register (req, res) {
    let user = await UsersService.register(req.body)
    
    res.json(user)
  }

  async login (req, res) {
    res.json({ 'status': 'off' })
  }

  async update (req, res) {
    res.json({ 'status': 'off' })
  }
}

export default new UsersController()
