import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { BiSolidTrash } from "react-icons/bi";
import { PiUserCircle } from "react-icons/pi";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { useDisclouse } from "../hooks/useDisclouse";
import { AddUpdateContact } from "./AddUpdateContact";
import { toast } from "react-toastify";

export const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted  successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow flex items-center rounded-lg justify-between "
      >
        {/* <PiUserCircle className="text-orange  ml-2 text-5xl" />
      <div className="text-black flex flex-col   ">
        <h2 className="font-medium">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>
      <div className="flex justify-between ml-5 ">
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
      </div> */}
        <div className="flex gap-1">
          <PiUserCircle className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <BiSolidTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddUpdateContact
        contact={contact}
        isUpdate
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};
