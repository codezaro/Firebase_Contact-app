import React from "react";
import { BiSolidTrash } from "react-icons/bi";
import { PiUserCircle } from "react-icons/pi";
import { RiEditCircleLine } from "react-icons/ri";

export const ContactCard = ({ contact }) => {
  return (
    <div
      key={contact.id}
      className="bg-yellow flex items-center rounded-lg justify-between "
    >
      <PiUserCircle className="text-orange  ml-2 text-5xl" />
      <div className="text-black ">
        <h2 className="font-medium">{contact.name}</h2>
        <p className="text-sm">{contact.email}</p>
      </div>
      <div className="flex justify-between">
        <div>
          <RiEditCircleLine className="text-3xl" />
        </div>
        <div>
          <BiSolidTrash className="text-3xl mr-3  text-purple" />
        </div>
      </div>
    </div>
  );
};
