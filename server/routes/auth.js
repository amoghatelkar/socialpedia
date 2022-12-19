import bodyParser from 'body-parser';
import express from 'express';
import { login } from "../controllers/auth.js";

const router = express.Router();

router.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
router.post("/login", login);

export default router;