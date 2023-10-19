import express from 'express';
import { getConfig } from "./endpoints"

const router = express.Router();

router.get('/', getConfig)

export default {
  name: 'clientConfig',
  path: '/config/',
  router
}