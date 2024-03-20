import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { BiSolidTrash } from "react-icons/bi";
import { PiUserCircle } from "react-icons/pi";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { useDisclouse } from "../hooks/useDisclouse";
import { AddUpdateContact } from "./AddUpdateContact";

export const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={contact.id}
      className="bg-yellow flex items-center rounded-lg justify-between "
    >
      <PiUserCircle className="text-orange  ml-2 text-5xl" />
      <div className="text-black flex flex-col justify-start">
        <h2 className="font-medium">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>
      <div className="flex justify-between">
        <div>
          <RiEditCircleLine
            onClick={onOpen}
            className=" cursor-pointer text-3xl"
          />
        </div>
        <div>
          <BiSolidTrash
            onClick={() => deleteContact(contact.id)}
            className="text-3xl mr-3 cursor-pointer text-purple"
          />
        </div>
      </div>
      <AddUpdateContact isUpdate onClose={onClose} isOpen={isOpen} />
    </div>
  );
};
