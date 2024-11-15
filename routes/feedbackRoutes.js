import { createAdmin} from "../controllers/userControllers.js";
import { createAlumni } from "../controllers/userControllers.js";
import { createStudent } from "../controllers/userControllers.js";
import { getAllUsers } from "../controllers/userControllers.js";
import { createCompany, getCompanies } from "../controllers/companyController.js";
import { createReview } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likeController.js";
import { isAdmin } from "../middleware/Middleware.js";
import express from "express";


const router = express.Router()

router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)
router.post("/company/create",isAdmin,createCompany)
router.post("/review/create",createReview)
router.post("/like/create",likeReviews)



router.get("/user/get",getAllUsers)
router.get("/company/get",getCompanies)


export default router;