
import { body } from 'express-validator';

export const equipmentCreateValidator = [
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isString().withMessage('El nombre debe ser texto'),
  body('type')
    .notEmpty().withMessage('El tipo es obligatorio')
    .isString().withMessage('El tipo debe ser texto'),
  body('serial')
    .notEmpty().withMessage('El número de serie es obligatorio')
    .isString().withMessage('El número de serie debe ser texto'),
  body('location')
    .notEmpty().withMessage('La ubicación es obligatoria')
    .isString().withMessage('La ubicación debe ser texto'),
  body('status')
    .notEmpty().withMessage('El estado es obligatorio')
    .isString().withMessage('El estado debe ser texto'),
  body('assignedTo')
    .notEmpty().withMessage('El responsable es obligatorio')
    .isInt().withMessage('El responsable debe ser un ID numérico'),
];
