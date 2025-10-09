import jwt from 'jsonwebtoken';
import config from '../config';
import type { StringValue } from 'ms';


function getJwtSecret(): string {
  if (!config.jwtSecret) {
    throw new Error('JWT secret is not defined');
  }
  return config.jwtSecret;
}

export const signToken = (payload: object, expiresIn: StringValue | number = '8h') => {
  return jwt.sign(payload, getJwtSecret() as jwt.Secret, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, getJwtSecret() as jwt.Secret) as any;
};
