import express from "express";

import {
  addDoctor,
  adminDashboard,
  adminLogin,
  allDoctors,
  appointmentCancel,
  appointmentsAdmin,
} from "../controllers/adminController.js";

import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/adminAuth.js";
import { changeAvailability } from "../controllers/doctorController.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", adminLogin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.post("/change-availability", authAdmin, changeAvailability);
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel);
adminRouter.get("/dashboard", authAdmin, adminDashboard);

export default adminRouter;
