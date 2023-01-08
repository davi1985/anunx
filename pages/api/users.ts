import type { NextApiRequest, NextApiResponse } from 'next';

import { connect } from '../../src/db/connection';
import User from '../../src/models/users-model';
import { crypt } from '../../utils/password';

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      await connect();
      res.status(200).json({ success: true });
      break;

    case 'POST':
      const { name, email, password } = req.body;

      await connect();

      const passwordCrypted = await crypt(password);

      const user = new User({
        name,
        email,
        password: passwordCrypted,
      });

      user.save();

      res.status(201).json(user);
      break;

    default:
      break;
  }
};

export default users;
