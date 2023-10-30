import express from 'express';
import { getConfig } from "./routes"

const router = express.Router();

router.get('/', getConfig)

export default {
  name: 'clientConfig',
  path: '/config/',
  router
}