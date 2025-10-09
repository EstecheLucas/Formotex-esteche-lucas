import { prisma } from '../repositories/prisma.repository';

export const create = async (data: any) => {
  const eq = await prisma.equipment.create({ data });
  return eq;
};


export const getAll = async () => {
  return prisma.equipment.findMany({ include: { user: true } });
};

export const getById = async (id: string) => {
  return prisma.equipment.findUnique({ where: { id: Number(id) }, include: { user: true } });
};

export const update = async (id: string, data: any) => {
  return prisma.equipment.update({ where: { id: Number(id) }, data });
};

export const remove = async (id: string) => {
  return prisma.equipment.delete({ where: { id: Number(id) } });
};
