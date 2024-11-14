const Appointment = require("../models/Appointment");

const postAppointment = async (req, res) => {
  try {
    await Appointment.create(req.body);
    res.json({ status: "ok", msg: "appointment created" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to create appointment" });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to read appointments" });
  }
};

const putAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: "ok", msg: "appointment updated" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to update appointment" });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "appointment deleted" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to delete appointment" });
  }
};

module.exports = {
  postAppointment,
  getAppointments,
  putAppointment,
  deleteAppointment,
};
