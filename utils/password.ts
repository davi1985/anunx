import bcryptjs from 'bcryptjs';

export const crypt = async (pwd: string) => {
  const salt = await bcryptjs.genSalt(12);

  return await bcryptjs.hash(pwd, salt);
};
