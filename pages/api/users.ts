import type { NextApiRequest, NextApiResponse } from 'next';

import { connect } from '../../src/db/connection';

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      await connect();
      res.status(200).json({ success: true });
    default:
      break;
  }
};

export default users;
