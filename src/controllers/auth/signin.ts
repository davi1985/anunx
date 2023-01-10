import type { NextApiRequest, NextApiResponse } from 'next';
import { compare } from '../../../utils/password';
import { connect } from '../../db/connection';
import UsersModel from '../../models/users-model';

export const post = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();

  const { email, password } = req.body;

  const user = await UsersModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const isCorrectPassword = await compare(password, user!.password);

  if (isCorrectPassword) {
    return res.status(200).json({
      _id: user?._id,
      name: user?.name,
      email: user?.email,
    });
  }

  return res.status(400).json({
    message: 'Invalid',
  });
};
