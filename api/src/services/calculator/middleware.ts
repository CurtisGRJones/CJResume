import express from 'express';
import { add, divide, multiply, subtract } from "./routes"

const router = express.Router();

router.post('/add', add)
router.post('/subtract', subtract)
router.post('/multiply', multiply)
router.post('/divide', divide)

export default {
  name: 'calculator',
  router
}