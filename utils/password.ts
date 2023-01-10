import bcryptjs from 'bcryptjs';

export const crypt = async (pwd: string) => {
  const salt = await bcryptjs.genSalt(12);

  return await bcryptjs.hash(pwd, salt);
};

export const compare = async (pwd: string, hash: string) =>
  bcryptjs.compare(pwd, hash);
