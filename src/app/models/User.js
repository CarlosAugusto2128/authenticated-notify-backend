import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        first_auth: Sequelize.DATE,
      },
      { sequelize }
    );

    return this;
  }
}

export default User;
