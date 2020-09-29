import * as Yup from 'yup';
import Mail from '../../lib/Mail';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create(req.body);

    const { id, name, email } = user;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Bem-Vindo',
      template: 'welcome',
      context: {
        username: user.name,
      },
    });

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
