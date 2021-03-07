import React from "react";
import { ReactComponent as Modal } from "react-modal";
import EventsForm from "../EventsForm";

export const ReactComponent = () => {
  return (
    <div className="event_modal">
      <Modal isOpen={true}>
        <h2>Modal Title</h2>
        <EventsForm />
      </Modal>
    </div>
  );
};
export default ReactComponent;
