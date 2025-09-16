import { Router } from "express";
import { homePage, aboutPage } from "../controllers/homeController";

const router = Router();

router.get("/", homePage);
router.get("/about", aboutPage);

export = router;