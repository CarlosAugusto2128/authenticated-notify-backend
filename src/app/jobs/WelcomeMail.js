import Mail from '../../lib/Mail';

class WelcomeMail {
  get key() {
    return 'WelcomeMail';
  }

  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Bem-Vindo',
      template: 'welcome',
      context: {
        username: user.name,
      },
    });
  }
}

export default new WelcomeMail();
