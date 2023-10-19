import express from 'express';
import { CmsControler } from '../../controlers';

const router = express.Router();

const controler = new CmsControler()

// TODO should this all be in a conf file?
export default {
  name: 'cms',
  router
}