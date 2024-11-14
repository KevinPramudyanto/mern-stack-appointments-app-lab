import { useRef } from "react";
import ReactDOM from "react-dom";

const OverLay = (props) => {
  const titleRef = useRef();
  const typeRef = useRef();
  const purposeRef = useRef();
  const companyRef = useRef();
  const personRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  const commentRef = useRef();

  const putAppointment = async (id) => {
    try {
      const res = await fetch(
        import.meta.env.VITE_SERVER + "/appointment/" + id,
        {
          method: "PUT",
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
        }
      );
      if (!res.ok) {
        throw new Error("error");
      }
      props.getAppointments();
      props.setShowUpdateModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <h1>Appointment App</h1>

      <h2>Update this appointment :</h2>
      <input
        ref={titleRef}
        placeholder="Title/Label (of the appointment)"
        defaultValue={props.selectedAppointment.title}
      />
      <input
        ref={typeRef}
        placeholder="Type (e.g., interviews, medical, dental, lunch, dinner, etc.)"
        defaultValue={props.selectedAppointment.type}
      />
      <input
        ref={purposeRef}
        placeholder="Purpose (e.g., meet to change deliverables)"
        defaultValue={props.selectedAppointment.purpose}
      />
      <input
        ref={companyRef}
        placeholder="Company (where the appointment is held)"
        defaultValue={props.selectedAppointment.company}
      />
      <input
        ref={personRef}
        placeholder="Person meeting with"
        defaultValue={props.selectedAppointment.person}
      />
      <input
        ref={addressRef}
        placeholder="Address (of the company)"
        defaultValue={props.selectedAppointment.address}
      />
      <input
        ref={dateRef}
        placeholder="Date and Time"
        defaultValue={props.selectedAppointment.date}
      />
      <input
        ref={commentRef}
        placeholder="Comments (text box)"
        defaultValue={props.selectedAppointment.comment}
      />
      <button onClick={() => props.setShowUpdateModal(false)}>cancel</button>
      <button onClick={() => putAppointment(props.selectedAppointment._id)}>
        Update Appointment
      </button>
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          selectedAppointment={props.selectedAppointment}
          getAppointments={props.getAppointments}
          setShowUpdateModal={props.setShowUpdateModal}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateModal;
