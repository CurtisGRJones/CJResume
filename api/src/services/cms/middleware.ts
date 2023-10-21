import express from 'express';
import { CmsControler } from '../../controlers';
import { resume } from './endpoints';

const router = express.Router();

const controler = new CmsControler()

router.get('/resume', resume(controler))

// TODO should this all be in a conf file?
export default {
  name: 'cms',
  router
}