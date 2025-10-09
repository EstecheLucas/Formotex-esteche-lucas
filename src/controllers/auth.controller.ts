import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  const user = await AuthService.register({ name, email, password, role });
  res.status(201).json({ user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { user, token } = await AuthService.login(email, password);
  res.json({ user, token });
};
