import express from 'express';
import { CmsControler } from '../../controlers';
import { resume, seedData } from './endpoints';

const router = express.Router();

const controler = new CmsControler()

router.get('/resume', resume(controler))
router.get('/seed', seedData(controler))

// TODO should this all be in a conf file?
export default {
  name: 'cms',
  router
}