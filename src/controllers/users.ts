import type { NextApiRequest, NextApiResponse } from 'next';
import { crypt } from '../../utils/password';
import { connect } from '../db/connection';
import UsersModel from '../models/users-model';

export const get = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();

  const users = await UsersModel.find();

  res.status(200).json(users);
};

export const post = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();

  const { name, email, password } = req.body;

  const passwordCrypted = await crypt(password);

  const newUser = new UsersModel({
    name,
    email,
    password: passwordCrypted,
  });

  newUser.save();

  res.status(201).json(newUser);
};
