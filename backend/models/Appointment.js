const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  purpose: { type: String, required: true },
  company: { type: String, required: true },
  person: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
