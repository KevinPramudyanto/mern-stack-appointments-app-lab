const express = require("express");
const router = express.Router();
const {
  postAppointment,
  getAppointments,
  putAppointment,
  deleteAppointment,
} = require("../controllers/appointments");

router.post("/appointment", postAppointment);
router.get("/appointments", getAppointments);
router.put("/appointment/:id", putAppointment);
router.delete("/appointment/:id", deleteAppointment);

module.exports = router;
