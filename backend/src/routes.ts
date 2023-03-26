import express from 'express';
import Controller from './controllers';
const router = express.Router();

router.post('/update/:id', Controller.updateDate);
router.get('/config', Controller.getConfig);


export = router;
