import { prisma } from '../repositories/prisma.repository';
import { hash, compare } from '../utils/hash.util';
import { signToken } from '../utils/jwt.util';

export const register = async ({ name, email, password, role = 'USER' }: any) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw { status: 400, message: 'Email already in use' };
  const hashed = await hash(password);
  const user = await prisma.user.create({
    data: { name, email, password: hashed, role }
  });
  return { id: user.id, name: user.name, email: user.email, role: user.role };
};

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw { status: 401, message: 'Invalid credentials' };
  const ok = await compare(password, user.password);
  if (!ok) throw { status: 401, message: 'Invalid credentials' };
  const token = signToken({ id: user.id, email: user.email, role: user.role });
  return { user: { id: user.id, name: user.name, email: user.email, role: user.role }, token };
};
