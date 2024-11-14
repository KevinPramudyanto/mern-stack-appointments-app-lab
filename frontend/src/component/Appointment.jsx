import { useState } from "react";

const Appointment = ({ appointment, handleUpdate, deleteAppointment }) => {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="card">
      <div>Title : {appointment.title}</div>
      {isDetail && (
        <>
          <div>Type : {appointment.type}</div>
          <div>Purpose : {appointment.purpose}</div>
          <div>Company : {appointment.company}</div>
          <div>Person meeting with : {appointment.person}</div>
          <div>Address : {appointment.address}</div>
          <div>Date and Time : {appointment.date}</div>
          <div>Comments : {appointment.comment}</div>
        </>
      )}
      <button onClick={() => setIsDetail((prevIsDetail) => !prevIsDetail)}>
        {isDetail ? "Hide" : "Open"} Detail
      </button>
      <button onClick={() => handleUpdate(appointment)}>
        Open Update Form
      </button>
      <button onClick={() => deleteAppointment(appointment._id)}>
        Delete Appointment
      </button>
    </div>
  );
};

export default Appointment;
