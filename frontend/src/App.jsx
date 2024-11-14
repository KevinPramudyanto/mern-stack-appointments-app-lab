import { useEffect, useRef, useState } from "react";
import Appointment from "./component/Appointment.jsx";
import UpdateModal from "./component/UpdateModal.jsx";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState({});
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const titleRef = useRef();
  const typeRef = useRef();
  const purposeRef = useRef();
  const companyRef = useRef();
  const personRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  const commentRef = useRef();

  const postAppointment = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + "/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleRef.current.value,
          type: typeRef.current.value,
          purpose: purposeRef.current.value,
          company: companyRef.current.value,
          person: personRef.current.value,
          address: addressRef.current.value,
          date: dateRef.current.value,
          comment: commentRef.current.value,
        }),
      });
      if (!res.ok) {
        throw new Error("error");
      }
      getAppointments();
      titleRef.current.value = "";
      typeRef.current.value = "";
      purposeRef.current.value = "";
      companyRef.current.value = "";
      personRef.current.value = "";
      addressRef.current.value = "";
      dateRef.current.value = "";
      commentRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  const getAppointments = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_SERVER + "/appointments");
      if (!res.ok) {
        throw new Error("error");
      }
      const data = await res.json();
      setAppointments(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const res = await fetch(
        import.meta.env.VITE_SERVER + "/appointment/" + id,
        { method: "DELETE" }
      );
      if (!res.ok) {
        throw new Error("error");
      }
      getAppointments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (appointment) => {
    setSelectedAppointment(appointment);
    setShowUpdateModal(true);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      {showUpdateModal && (
        <UpdateModal
          selectedAppointment={selectedAppointment}
          getAppointments={getAppointments}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}

      <h1>Appointment App</h1>

      <h2>Add appointment :</h2>
      <input ref={titleRef} placeholder="Title/Label (of the appointment)" />
      <input
        ref={typeRef}
        placeholder="Type (e.g., interviews, medical, dental, lunch, dinner, etc.)"
      />
      <input
        ref={purposeRef}
        placeholder="Purpose (e.g., meet to change deliverables)"
      />
      <input
        ref={companyRef}
        placeholder="Company (where the appointment is held)"
      />
      <input ref={personRef} placeholder="Person meeting with" />
      <input ref={addressRef} placeholder="Address (of the company)" />
      <input ref={dateRef} placeholder="Date and Time" />
      <input ref={commentRef} placeholder="Comments (text box)" />
      <button onClick={postAppointment}>Add Appointment</button>

      <h2>Brief of all appointments :</h2>
      {appointments.map((appointment) => (
        <Appointment
          key={appointment._id}
          appointment={appointment}
          handleUpdate={handleUpdate}
          deleteAppointment={deleteAppointment}
        />
      ))}
    </>
  );
}

export default App;
