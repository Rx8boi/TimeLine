import React from "react";
import { Modal as AddEvent } from "react-modal";
import EventsForm from "../EventsForm";

export const Modal = () => {
  return (
    <div>
      <AddEvent isOpen={true}>
        <h2>Modal Title</h2>
        <EventsForm />
      </AddEvent>
    </div>
  );
};
