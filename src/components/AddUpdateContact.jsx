import React from "react";
import { Modal } from "./Modal";
import { Field, Form, Formik } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const AddUpdateContact = ({ isOpen, onClose, isUpdate }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                className="border border-black pl-2 h-10"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border pl-2 border-black h-10" />
            </div>
            <button className="bg-orange self-end my-2 px-3 py-1.5 border">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
