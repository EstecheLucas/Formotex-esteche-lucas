import { Request, Response } from 'express';
import * as EquipmentService from '../services/equipment.service';

export const createEquipment = async (req: Request, res: Response) => {
  const data = req.body;
  const eq = await EquipmentService.create(data);
  res.status(201).json(eq);
};

export const getAll = async (req: Request, res: Response) => {
  const list = await EquipmentService.getAll();
  res.json(list);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const eq = await EquipmentService.getById(id);
  if (!eq) return res.status(404).json({ message: 'Not found' });
  res.json(eq);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await EquipmentService.update(id, req.body);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  await EquipmentService.remove(id);
  res.status(204).send();
};
