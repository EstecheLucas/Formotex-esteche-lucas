import { Router } from 'express';
import * as EquipmentCtrl from '../controllers/equipment.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { authorize } from '../middlewares/role.middleware';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { equipmentCreateValidator } from '../validators/equipment.validators';

const router = Router();

router.use(authenticate); 
router.post('/', authorize(['ADMIN']), equipmentCreateValidator, validationMiddleware, EquipmentCtrl.createEquipment);
router.get('/', authorize(['ADMIN','USER']), EquipmentCtrl.getAll);
router.get('/:id', authorize(['ADMIN','USER']), EquipmentCtrl.getById);
router.put('/:id', authorize(['ADMIN']), EquipmentCtrl.update);
router.delete('/:id', authorize(['ADMIN']), EquipmentCtrl.remove);

export default router;
